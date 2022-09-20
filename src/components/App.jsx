
import React from "react"
import ContactForm from "./ContactForm/ContactForm"
import ContactList from "./ContactList/ContactList"
import Filter from "./Filter/Filter.jsx"
import { nanoid } from 'nanoid'
class App extends React.Component {

  state = {
  contacts: [  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
  filter:""
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
    localStorage.setItem("contacts", JSON.stringify(this.state.contacts))
  }
  }
  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem("contacts"))
    if (contacts) {
      this.setState({contacts })
    }
  }
    onGetContact = user => {
      const { contacts } = this.state  
      if (contacts.some(contact => contact.name === user.name)) {
        return alert(`${user.name} is already in contacts.`) 
      }
      user.id=nanoid()
       this.setState(prevState => ({
     contacts:[user, ...prevState.contacts]
    }))

    }

  deleteItem = (contactId) => {
        this.setState(prevState => ({
            contacts: prevState.contacts.filter(contact => {
                return contact.id !== contactId
            })
        }))
    }

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value })
  }


  render() {
    const { contacts, filter } = this.state
    
      const normalizedContacts =this.state.filter.toLowerCase()

  const visibleContacts = contacts.filter(contact=>contact.name.toLowerCase().includes(normalizedContacts))
    return  <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: "column",
        backgroundColor:"#7c7bff"
      }}
    >
      <ContactForm onSubmit = {this.onGetContact} />
      
       
        <Filter value={filter} onChange={this.changeFilter } />
          <ContactList contacts={ visibleContacts} onDeleteContact = {this.deleteItem} />
      
      
      
  
    </div>
  }

}


export default App




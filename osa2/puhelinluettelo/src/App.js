import React, { useState } from 'react'
import Person from './components/Person'

const App = () => {
    const [persons, setPersons] = useState([
        { 
            name: 'Arto Hellas',
            number: '000-00000'
        }
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }
    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }
    const addName = (event) => {
        event.preventDefault()

        const nameObject = {
            name: newName,
            number: newNumber
        }

        const samoja = persons.filter(person => person.name === newName)
    
        var add = (samoja.length > 0)?false:true;
        if (add) {
            setPersons(persons.concat(nameObject))
            setNewName('')
            setNewNumber('')
        }
        else  
            alert(`${newName} on jo luettelossa`)
    }
    const names = persons.map(
        person => <Person key={person.name} person={person} />
    )
    return (
        <div>
            <h2>Puhelinluettelo</h2>
            <form onSubmit={addName}>
                <div>
                    nimi: <input
                        value={newName}
                        onChange={handleNameChange}
                    /><br />
                    numero: <input
                        value={newNumber}
                        onChange={handleNumberChange}
                    />
                </div>
                <div>
                    <button type="submit">lisää</button>
                </div>
            </form>
            <h2>Numerot</h2>
            {names}
        </div>
    )

}

export default App
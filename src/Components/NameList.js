//** List Rendering */
//** Linked with Person.js */
//** THis is Parent Component */

import React from 'react'
import Person from './Person'

function NameList() {
    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: '30',
            skill: 'React'
        },
        {
            id: 2,
            name: 'Clark',
            age: '25',
            skill: 'Django'
        },
        {
            id: 3,
            name: 'Diana',
            age: '28',
            skill: 'Laravel'
        }
    ]

    const personList = persons.map(person => <Person key={person.id} person={person} />)
    return <div>{personList}</div>
}

export default NameList
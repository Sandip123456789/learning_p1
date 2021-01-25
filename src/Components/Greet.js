//** This is Functional Component */
import React from 'react';

// function Greet(){
//     return <h1>Hello Khaate!!</h1>
// }

/* ES6 arrow function syntax */
// const Greet = () => <h1>Hello Brother!</h1>


//JSX version for Greet Component
// const Greet = (props) => {
//     console.log(props)
//     return(
//         <div>
//             <h1>Hello {props.name} a.k.a {props.heroName}!!</h1>

//             {props.children}
//         </div>
//     )
// }

//Destructuring props
const Greet = props => {
    const {name, heroName} = props
    return(
        <div>
            <h1>Hello {name} a.k.a {heroName}!!</h1>

            {props.children}
        </div>
    )
}

export default Greet;


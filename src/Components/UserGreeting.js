//** Conditional Rendering */

import React, { Component } from 'react'
class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: false
        }
    }
    

    render() {
        //** Using short circuit operator appraoch (4th appraoch) */
        //** Just specific case of ternary operator approach */
        //** Use when we want to render either something or nothing */
        return this.state.isLoggedIn && <div>Welcome Killerbee</div>


        //** Using ternary conditional operator approach (3rd approach) */
        //** More simpler approach */
        // return this.state.isLoggedIn ? (
        //     <div>Welcome Killerbee</div>
        // ) : (
        //     <div>Welcome Guest</div>
        // )


        //** Using Element Variable (2nd approach) */
        //** Better approach */
        // let message
        // if (this.state.isLoggedIn){
        //     message = <div>Welcome Killerbee</div>
        // }else{
        //     message = <div>Welcome Guest</div>
        // }
        
        // return <div>{message}</div>


        //** if else approach (1st approach) */ 
        // if (this.state.isLoggedIn){
        //     return(
        //         <div>Welcome Killerbee</div>
        //     )
           
        // }else{
        //     return(
        //         <div>Welcome Guest</div>
        //     )   
        // }


        // return (
        //     <div>
        //         <div>Welcome Killerbee</div>
        //         <div>Welcome Guest</div>
        //     </div>
        // )
    }
}

export default UserGreeting

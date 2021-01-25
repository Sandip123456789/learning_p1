//** Styling and CSS Basics */
//** CSS Stylesheets */

import React from 'react'
import myStyles from './myStyles.css'

function Stylesheet(props) {
    const className = props.primary ? 'primary' : ''
    return (
        <div>
            <h1 className={`${className} font-xl`}>Stylesheet</h1>
        </div>
    )
}

export default Stylesheet

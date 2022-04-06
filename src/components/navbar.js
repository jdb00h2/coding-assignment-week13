import React from 'react';
import "../styles/navbar.css"

export default class Navbar extends React.Component{
    render () {
        return (
         <nav className='navigation'>
             <div className='navigation-menu'>
                 <ul>
                     <li>
                         <a href='#'>Home</a>
                     </li>
                     <li>
                         <a href='#'>About</a>
                     </li>
                     <li>
                         <a href='#'>Contact</a>
                     </li>
                 </ul>
             </div>
         </nav> 
        )
    }
}
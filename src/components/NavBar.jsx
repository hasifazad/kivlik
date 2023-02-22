import React from 'react'
import './NavBar.css'

function NavBar() {
    const menu = ['About Us', 'Service', 'Pricing', 'Contact']
    return (
        <div className='navbar'>
            <div className='navbar_box'>
                <h1 className='kivlik'>KIVLIK</h1>
                <div className='nb_box_2'>
                    {
                        menu.map((row, index) => <p key={index} className='menu'>{row}</p>)
                    }
                </div>
                <div className='nb_box_3'>
                    <p className='menu'>Login</p>
                    <p className='menu'>Signup</p>
                </div>
            </div>
        </div>
    )
}

export default NavBar
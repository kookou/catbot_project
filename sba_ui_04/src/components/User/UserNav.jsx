import React from 'react'
import {Link} from 'react-router-dom'

const UserNav = () => (<>
<nav>
    <oi>
        <li><Link to='/userlogin'>UserLogin</Link></li>
        <li><Link to='/userregister'>UserRegister</Link></li>
        <li><Link to='/userremove'>UserRemove</Link></li>
        <li><Link to='/userupdate'>UserUpdate</Link></li>
    </oi>
</nav>
</>)

export default UserNav
import React, {useState} from 'react'
import './Nav.css';

const Nav = () => {
    const [search, setSearch] = useState('');

    return (
        <nav>
            <div className='flex-nav'>
                <div className='search-nav'>
                    <input type='text' className='search-nav__field' placeholder='Search Users' />
                </div>
                <div className='menu-nav'>
                    <a href=""> repuation</a>
                    <a href="">news</a>
                    <a href=""> voters</a>
                    <a href=""> editors</a>
                    <a href=""> moderators</a>
                </div>
            </div>
        </nav>
    )
}

export default Nav
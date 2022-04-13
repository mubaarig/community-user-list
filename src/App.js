import React, { useState } from 'react';
import Data from './Data'
import './App.css';
// import Users from './components/Users';
import Users from './components/Users';

function App() {
    const [users, setUsers] = useState(Data);
    return (
        <main>
            <section className="container">
                <Users users={users} />
                <div className='user-card'>
                    waynka
                </div>
                <div className='user-card'>
                    waynka
                </div>

            </section>
        </main>
    );
}

export default App;

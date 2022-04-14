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
                <Users users={ users } />
            </section>
        </main>
    );
}

export default App;

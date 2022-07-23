import React, { useState } from 'react';
import Data from './Data';
import NewsData from './components/news/NewsData';
import {AiQutlineMinus, AiQutlinePlus} from 'react-icons';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import './App.css';
import Users from './components/Users';
import News from './components/news/News';
import Event from './components/events/Event';

function App() {
    const [users, setUsers] = useState(Data);
    const [news, setNews] = useState(NewsData);
    return (
        <main>
            <section className="container">
                <Header/>
                <Nav/>
                <Users users={ users } />
                <News news={ news } />
                <Event/>

            </section>
        </main>
    );
}

export default App;

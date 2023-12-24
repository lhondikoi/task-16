import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar.js'
import Header from './components/header.js'
import BlogContainer from './components/blogcontainer.js'

import articles from './data.js'
import './styles/app.css'

export default function App() {
    return (
        <div className="app-container">
            <Header />
            <Navbar />
            <Routes>
                <Route path="/" element={<BlogContainer articles={articles} />}></Route>
                <Route path="/full-stack-development" element={<BlogContainer articles={articles.filter((article)=> article.category === "full stack development")} />}></Route>
                <Route path="/data-science" element={<BlogContainer articles={articles.filter((article)=> article.category === "data science")} />}></Route>
                <Route path="/cybersecurity" element={<BlogContainer articles={articles.filter((article)=> article.category === "cybersecurity")} />}></Route>
                <Route path="/career" element={<BlogContainer articles={articles.filter((article)=> article.category === "career")} />}></Route>
            </Routes>
        </div>
    )
}
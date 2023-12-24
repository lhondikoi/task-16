import React from 'react'
import Card from './card.js'
import '../styles/blogcontainer.css'

export default function BlogContainer({ articles }) {
    let cards = articles.map((card, index)=>{
        return (
            <Card 
                key={index}
                { ...card }
            />
        )
    })
    return (
        <main className="container blog-container">
            { cards }
        </main>
    )
}
import React from 'react'
import react from '../../assets/react-2.svg'
import firebase from '../../assets/firebase-1.svg'
import html from '../../assets/html-1.svg'
import css from '../../assets/css-3.svg'
import js from '../../assets/javascript-1.svg'
import node from '../../assets/nodejs-1.svg'
import './home.css'

const Home = () => {
  return (
    <div>Home
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi incidunt consequuntur distinctio laudantium sequi ipsum veritatis amet pariatur ducimus, quibusdam ab rerum atque error voluptatum, aut porro deleniti tempore esse?</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi incidunt consequuntur distinctio laudantium sequi ipsum veritatis amet pariatur ducimus, quibusdam ab rerum atque error voluptatum, aut porro deleniti tempore esse?</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi incidunt consequuntur distinctio laudantium sequi ipsum veritatis amet pariatur ducimus, quibusdam ab rerum atque error voluptatum, aut porro deleniti tempore esse?</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi incidunt consequuntur distinctio laudantium sequi ipsum veritatis amet pariatur ducimus, quibusdam ab rerum atque error voluptatum, aut porro deleniti tempore esse?</p>
      <img src={js} alt='javascript logo' className='logo-img'/>
      <img src={html} alt='html logo'/>
      <img src={css} alt='css logo'/>
      <img src={react} alt='react logo'/>
      <img src={node} alt='node.js logo'/>
      <img src={firebase} alt='firebase logo'/>
    </div>
  )
}

export default Home
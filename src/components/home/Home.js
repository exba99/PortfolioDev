import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
//import ImgLogo from '../../assets/logo-rogner.jpeg'

/*const containerVariants={
    hidden:{
      opacity:0,
      x:'100vw'
    },
    visible:{
      opacity:1,
      x:0,
      transition:{
        type:'spring',
        delay:-1
      }
    },
    exit:{
      x:'-100vw',
      transition:{ease:'easeInOut'}
    }
}*/


function Home() {
    return (
        <div className="Home">
            <span className="html-open-span">&lt;html&gt;</span>
            <span className="body-open-span">&lt;body&gt;</span>
            <div className="text-principale">
                <h1 className="text-primary" arial="Hello, Je suis Abdoulbachir, Developpeur Web">
                    <span>H</span>
                    <span>e</span>
                    <span>l</span>
                    <span>l</span>
                    <span>o</span>
                    <span>,</span>
                    <br></br>
                    <span>J</span>
                    <span>e</span>
                    <span> </span>
                    <span>s</span>
                    <span>u</span>
                    <span>i</span>
                    <span>s</span>
                    <span> </span>
                    <span>A</span>
                    <span>b</span>
                    <span>d</span>
                    <span>o</span>
                    <span>u</span>
                    <span>l</span>
                    <span> </span>
                    <span>b</span>
                    <span>a</span>
                    <span>c</span>
                    <span>h</span>
                    <span>i</span>
                    <span>r</span>
                    <span>,</span>
                    <br></br>
                    <span>D</span>
                    <span>e</span>
                    <span>v</span>
                    <span>e</span>
                    <span>l</span>
                    <span>o</span>
                    <span>p</span>
                    <span>p</span>
                    <span>e</span>
                    <span>u</span>
                    <span>r</span>
                    <span> </span>
                    <span>w</span>
                    <span>e</span>
                    <span>b</span>
                    <span>.</span>
                </h1>
                <span className="specialite">Developpeur Web FullStack</span>
                <Link to='/about'>
                    <button className="contactez-moi">Contactez moi</button>
                </Link>
            </div>

            <div className="logo-principale">
                
            </div>
            <span className="body-closed-span">&lt;/body&gt;</span>
            <span className="html-closed-span">&lt;/html&gt;</span>
        </div>
    )
}

export default Home;
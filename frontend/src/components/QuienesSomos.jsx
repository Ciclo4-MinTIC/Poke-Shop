import React from 'react'
import "./about.css"
import Angelica from "../assets/Angelica.jpg"
import Nicolas from "../assets/Nicolas.jpg"
import Villabon from "../assets/Villabon.jpeg"
import Torres from "../assets/Torres.jpg"

const QuienesSomos = () => {
    return (
        <div>
            <div className="contenedor">
                <div className="card bg-dark">
                    <div className="content">
                        <div className="imgBX">
                            <img src={Villabon} alt="" />
                        </div>
                        <div className="contentBX">
                            <h3>Andres Villabon<br /><span>Frontend</span></h3>
                        </div>
                    </div>
                    <ul className="sci">
                        <li>
                            <a target="_blank" href="https://www.linkedin.com/in/camilo-villabon/" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                        </li>
                        <li>
                            <a target="_blank" href="https://github.com/CAMILOVILLABON123" rel="noreferrer"><i className="fab fa-github"></i></a>
                        </li>
                    </ul>
                </div>
                <div className="card bg-dark">
                    <div className="content">
                        <div className="imgBX">
                            <img src={Nicolas} alt="" />
                        </div>
                        <div className="contentBX">
                            <h3>Nicolas Buitrago<br /><span>Scrum Master</span></h3>
                        </div>
                    </div>
                    <ul className="sci">
                        <li>
                            <a target="_blank" href="https://www.linkedin.com/in/nicolas-buitrago-3184821b2/" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                        </li>
                        <li>
                            <a target="_blank" href="https://github.com/wnicolas" rel="noreferrer"><i className="fab fa-github"></i></a>
                        </li>
                    </ul>
                </div>
                <div className="card bg-dark">
                    <div className="content">
                        <div className="imgBX">
                            <img src={Angelica} alt="" />
                        </div>
                        <div className="contentBX">
                            <h3>Angelica Gutierrez<br /><span>Frontend</span></h3>
                        </div>
                    </div>
                    <ul className="sci">
                        <li>
                            <a target="_blank" href="https://www.linkedin.com/in/angelica-gutierrezra/" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                        </li>
                        <li>
                            <a target="_blank" href="https://github.com/angelica1910" rel="noreferrer"><i className="fab fa-github"></i></a>
                        </li>
                    </ul>
                </div>
                <div className="card bg-dark">
                    <div className="content">
                        <div className="imgBX">
                            <img src={Torres} alt="" />
                        </div>
                        <div className="contentBX">
                            <h3>Andrés Torres<br /><span>Backend</span></h3>
                        </div>
                    </div>
                    <ul className="sci">
                        <li>
                            <a target="_blank" href="https://www.linkedin.com/in/andres-camilo-torres-rosales-a49705204/" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                        </li>
                        <li>
                            <a target="_blank" href="https://github.com/Camilost1404" rel="noreferrer"><i className="fab fa-github"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default QuienesSomos

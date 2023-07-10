import React from "react";
import "./Skills.css";
import html from '../../assests/skills/html.svg'
import css from '../../assests/skills/css.svg'
import bootstrap from '../../assests/skills/bootstrap.svg'
import javascript from '../../assests/skills/javascript.svg'
import react from '../../assests/skills/react.svg'
import mongoDB from '../../assests/skills/mongoDB.svg'
import mysql from '../../assests/skills/mysql1.png'
import nodejs from '../../assests/skills/nodejs.png'
import express from '../../assests/skills/express.png'
import postman from '../../assests/skills/postman.png'
import netlify from '../../assests/skills/netlify.png'
import vercel from '../../assests/skills/vercel.png'
import git from '../../assests/skills/git.svg'
import render from '../../assests/skills/render.png'
import Vscode from "../../assests/skills/Vscode.png"

const Skills = () => {
    const skilsFrontData = [
        {
            image: html,
            Name: "HTML"
        },
        {
            image: css,
            Name: "CSS"
        },
        {
            image: bootstrap,
            Name: "Bootstrap"
        },
        {
            image: javascript,
            Name: "Javascript"
        },
        {
            image: react,
            Name: "React"
        }
    ]
    const skilsBackData = [
        {
            image: nodejs,
            Name: "Nodejs"
        },
        {
            image: express,
            Name: "express"
        },
        {
            image: mongoDB,
            Name: "mongoDB"
        },
        {
            image: mysql,
            Name: "mysql"
        }
    ]
    const skilsToolsData = [
        {
            image: git,
            Name: "GitHub"
        },
        {
            image: Vscode,
            Name: "Vscode"
        },
        {
            image: postman,
            Name: "postman"
        },
        {
            image: netlify,
            Name: "Netlify"
        },
        {
            image: vercel,
            Name: "Vercel"
        },
        {
            image: render,
            Name: "Render"
        }
    ]
    return (
        <div>
            <section id="skils">
                <h5>Technology Stack</h5>
                <h2>My Skills</h2>

                <div className="container skils__container">
                    <div className="skils__frontend">
                        <h3>Front End</h3>
                        <div className="skils__content">
                            {skilsFrontData.map((skill, id) => (
                                <article key={id} className="skils__details">
                                    <img className="skils-icon" src={skill.image} alt={skill.Name}></img>
                                    <div className="skils__details-name">
                                        <h4>{skill.Name}</h4>
                                    </div>
                                </article>
                            ))
                            }

                        </div>
                    </div>

                    <div className="skils__backend">
                        <h3>Back End & DataBase</h3>
                        <div className="skils__content">
                            {skilsBackData.map((skill, id) => (
                                <article key={id} className="skils__details">
                                    <img className="skils-icon" src={skill.image} alt={skill.Name}></img>
                                    <div className="skils__details-name">
                                        <h4>{skill.Name}</h4>
                                    </div>
                                </article>
                            ))
                            }

                        </div>
                    </div>
                    <div className="skils__backend">
                        <h3>Tools</h3>
                        <div className="skils__content">
                            {skilsToolsData.map((skill, id) => (
                                <article key={id} className="skils__details">
                                    <img className="skils-icon" src={skill.image} alt={skill.Name}></img>
                                    <div className="skils__details-name">
                                        <h4>{skill.Name}</h4>
                                    </div>
                                </article>
                            ))
                            }
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Skills;

import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import AvatarImg from "./bit manipulation.png";



const skillData = [{
    name: 'JavaScript',
    proficiency: 'Intermediate',
    color: 'red'
},
{
    name: 'React',
    proficiency: 'Intermediate',
    color: 'yellow'
},
{
    name: 'HTML+CSS',
    proficiency: 'Intermediate',
    color: 'green'
}];

const App = () => {
    return(
        <div className="card">
            <Avatar photo={AvatarImg}/>
            <div className="data">
                <Intro/>
                <Skillset/>
            </div>
        </div>
    );
}

const Avatar = (prop) => {
    return (
        <img className="avatar" src={prop.photo} alt="avatarimg"></img>
    );
}

const Intro = () => {
    return(
        <div>
            <h1>Rishabh Dubey</h1>
            <p>Full stack developer and passionate coder looking for a job</p>
        </div>
    )
}

const Skillset = () => {

    return (
        <div className="skill-list">
            {skillData.length>0 ? skillData.map((skill) => <Skill skill = {skill}/>) : <p>No skills!</p>}        
        </div>
    )
}

const Skill = ({skill}) => {
    return (
        <div className="skill" style={{backgroundColor: skill.color}}>{skill.name} {skill.proficiency === 'Intermediate' ? <span>👍</span> : ""}</div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)
import "./main.css"

export default function MainContent({onButtonClick,about,projects,skills}) {
    return (
        <>
        <div className="content">
    <button className="about" onClick={onButtonClick}>About</button>
    <button className="project" onClick={projects}>Projects</button>
    <button className="skill" onClick={skills}>Skills</button>

   
    </div>

    <div className="hiring">
        <h1  className="font-serif font-bold text-4xl italic tracking-wide">Available for Hire</h1>
        <img className="hiring-image" src="/hiring.avif" alt="Hiring Image"/>


    </div>



</>
    )
}
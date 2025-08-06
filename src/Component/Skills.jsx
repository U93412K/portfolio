import "./skills.css";
export default function Skills({ onBack }) {
    return (
        <>
        <div className="skills-content bg-[#000C66] h-screen">
            <h1 className="heading">Skills </h1>
            <img className="skills-image" src="/hired.png" alt="Skills Image"/>
            <div className="skills-list">
                <img className="html" src="/html.png" alt="HTML Icon"/>
                <img className="css" src="/css-coding.png" alt="CSS Icon"/>
                <img className="js" src="/java-script.png" alt="JavaScript Icon"/>
                <img className="react" src="/structure.png" alt="React Icon"/>

                </div>
                <button className="back-to-home" onClick={onBack}>Back to home</button>
        </div>
        </>
    )
}
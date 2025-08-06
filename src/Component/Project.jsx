import "./Project.css";
export default function Project({onBack}){
    return (
        <>
        <div className="project-content bg-[#000C66] h-screen">
        <h1 className="heading">Projects</h1>
        <div className="first-project">
            <img src="/Screenshot 2025-08-04 174036.png" className="amazon-img brightness-100  fill-indigo-500 drop-shadow-lg drop-shadow-indigo-500/50 border-4 bg-indigo-500 bg-clip-content p-3 "></img>
        </div>
        <div className="first-project-content">
            <h1 className="project-name  text-blue-600 dark:text-sky-400">Amazon Clone</h1>
            <p className="project-description ">This is a clone of the Amazon website, built using simply HTML, CSS, and JAVASSCRIPT. It features user authentication, product listings, and a shopping cart.
                It Was developed as a personal project to enhance my skills in web development and to understand the basics of the HTML,CSS and JS.
            </p>
        </div>

        <div className="second-project  bg-[#000C66] h-screen">
            <img src="/Screenshot 2025-08-04 213452.png " className="amazon-img-2 brightness-100 bg-[#000C66] h-screen fill-indigo-500 drop-shadow-lg drop-shadow-indigo-500/50 border-4 bg-indigo-500 bg-clip-content p-3 "></img>
            <div className="second-project-content">
                <h1 className="project-name-2 text-blue-600 dark:text-sky-400  bg-[#000C66] h-screen">HandGame</h1>
                <p className="project-description-2  bg-[#000C66] h-screen">This is a simple game built using HTML, CSS, and JavaScript. It allows users to play a hand game against the computer, where they can choose rock, paper, or scissors.
                The game was developed as a fun project to practice JavaScript logic and DOM manipulation.
                There is a feature in this game which displays whether you won or loose and your score also.
                </p>
                </div>
            </div>

            <div className="third-project bg-[#000C66] h-screen">
            <img src="/Screenshot 2025-08-04 223844.png" className="amazon-img-3 brightness-100 bg-[#000C66] h-screen fill-indigo-500 drop-shadow-lg drop-shadow-indigo-500/50 border-4 bg-indigo-500 bg-clip-content p-3 "></img>
            <div className="third-project-content">
                <h1 className="project-name-3 text-blue-600 dark:text-sky-400 bg-[#000C66] h-screen">Tic Tac Toe</h1>
                <p className="project-description-3 bg-[#000C66] h-screen">This is Tic Toe Game, built using HTML,CSS and JS. It showcases my skills, projects, and experiences.
                The game is designed to be responsive,user-friendly and joyful. it shows the winner. two people can play and it is a fun game.
                </p>
                </div>

                <div className="fourth-project bg-[#000C66] h-screen">
            <img src="/Screenshot 2025-08-05 002048.png" className="amazon-img-4 brightness-100 bg-[#000C66] h-screen fill-indigo-500 drop-shadow-lg drop-shadow-indigo-500/50 border-4 bg-indigo-500 bg-clip-content p-3 "></img>
            <div className="fourth-project-content">
                <h1 className="project-name-4 text-blue-600 dark:text-sky-400 bg-[#000C66] h-screen">ChefClaud</h1>
                <p className="project-description-4 bg-[#000C66] h-screen">This is my personal ChefClaud app that I built using React.js, HTML,CSS and JS. It showcases my skills, projects, and experiences.
                    In this REACT when we enter the ingredients available then it shows the recipe we can make with those ingredients.
                    It is a fun app to use and helps in cooking.
            <button class="btn-primary " onClick={onBack} >Back to Home</button>
                </p>
                

                </div>            
            </div>

            <p className=" ending bg-[#000C66] h-screen">More projects are coming soon </p>
            <div class="loading w-5 h-5 border-4 border-gray-300 border-t-blue-300 rounded-full animate-spin"></div>

            </div>
        </div>
        </>
    )
}
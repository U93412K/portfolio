import "./Home.css"
import {motion} from "framer-motion"



function Home({ onBack }) {
 

return (
    <>  
    <motion.div
    className="main-content"
      initial={{ x: '100vw', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '-100vw', opacity: 0 }}
      transition={{ type: 'spring', stiffness: 70, damping: 15 }}
    >
 <div className="home-content bg-[#000C66] h-screen"> 
          <h1  className="hey">Hey!
            <br></br>
            WHAT'S UP</h1>
            <p className="name">I am utsav...</p>
            <div className="descriptio-container">
          <p className="description"> A web developer with a passion for creating dynamic and responsive web applications. I love coding and am always eager to learn new technologies.</p>
          <br></br>
          <p className="description">I always strive for excellence
and am enthusiastic about transforming ideas into successful and impactful
products, with an innovative, obessive and keen eye for detail.</p>
          </div>
          <button id="button" className="bg-white/10 backdrop-blur-md text-white px-6 py-2 rounded-lg border border-white/20 hover:bg-white/20 transition" onClick={onBack}>Back To Home</button>
          <img className="rotating-image" src="/videoframe_10199.png"/>
          <img className="panda" src="/Panda-Sticker-768x768.PNG"/>


          </div>
      
    </motion.div>
    </>
)}

export default Home;
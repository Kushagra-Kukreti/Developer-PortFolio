
import "./Home.css"
import GitHubIcon from "../shared/icons/GitHubIcon"
import LinkedInIcon from "../shared/icons/LinkedInIcon"
const Home = () => {
  return (
    <div
     style={{height:"100vh",width:"100vw",backgroundColor:"whitesmoke",marginTop:"2em",display:"flex",justifyContent:"center", alignItems:"center"
     }}>
      <div className="content-container">
         
         <div className="vstack col-7 left-section">
          <h1 className="heading-section">Front-End React Developer <img src="./waving-hand.png" alt="waving_hand"/></h1>
          <p className="description-section">Hi, This is a dummy website. A website to show the quality and demo of my work📍</p>
          <div className="icons-section"> 
          <LinkedInIcon/>
          <GitHubIcon/>
          
          </div>
         </div>

         <div className="col-5 photo-section">
          <img src="./mainImage.jpg" alt="" />
          </div>

      </div>
    </div>
  )
}

export default Home

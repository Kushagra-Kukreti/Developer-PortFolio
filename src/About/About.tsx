
import styles from  "./About.module.css"
const About = () => {
  return (
    <div style={{height:"100vh",width:"100vw",backgroundColor:"whitesmoke",display:"flex",justifyContent:"center", alignItems:"center"}}>
       

      
      <div className={styles["about-content"]}>
        
         {/* left part */}
        <div className={styles["left-section"]}>

          <img src="./aboutImage.jpg" alt=""  className={styles["img-section"]}/>
          <div className={styles["rotating-wheel"]}>
            <img src="rotatingImage.svg" className={styles["rotating-image"]}/>
            <img src="./manWorking.png" className={styles["working-man"]}/>
          </div>

        </div>
            

            {/* right part */}
        <div className={styles["right-section"]}>
          <div className={styles["info-container"]}>
           <h3 className={styles["heading"]}>About Me</h3>
           <h4 className={styles["sub-heading"]}>This is a dummy text for the demo website📍</h4>
           <p className={styles.description}>
            The portfolios are like a second face for people they depict a lot about the person.People's portfolios
            tells a lot about them, they are like a second shadow of them
           </p>
           </div>
        </div>
          

      </div>
    </div>
  )
}

export default About

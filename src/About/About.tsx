
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
           <h4 className={styles["sub-heading"]}>Front-end Developer based in Dehradun,India📍</h4>
           <p className={styles.description}>
           Hey, my name is Kushagra, and I'm a Frontend Developer. My passion is to create and develop a clean UI/UX for my users.  <br /><br />
           My main stack currently is React/Next.js in combination with Tailwind CSS and TypeScript.
           </p>
           </div>
        </div>
          

      </div>
    </div>
  )
}

export default About

import GitHubIcon from "../icons/GitHubIcon"
import LinkedInIcon from "../icons/LinkedInIcon"
import styles from  "./Footer.module.css"
const Footer = () => {
  return (
    <div style={{height:"30vh",width:"100vw",backgroundColor:"#2d2e32",display:"flex",justifyContent:"center", alignItems:"center"}}>

      <div className={styles["content-container"]}>
        <h3 className={styles["copyright-container"]}>
         Copyright &copy;2024.All rights reserved
        </h3>
        <div className={styles["icons-container"]}>
          <LinkedInIcon/>
          <GitHubIcon/>
        </div>
      </div>
      
    </div>
  )
}

export default Footer

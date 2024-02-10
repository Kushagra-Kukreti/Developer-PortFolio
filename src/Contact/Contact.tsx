import LocationIcon from "../shared/icons/LocationIcon";
import MailIcon from "../shared/icons/MailIcon";
import styles from "./Contact.module.css";
const Contact = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "whitesmoke",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className={styles["contact-content"]}>
        <p className={styles["heading"]}>contact</p>
        <h3 className={styles["sub-heading"]}>Don't be shy! Hit me up! 👇</h3>
        <div className={styles["contact-icons"]}>
          <div className={styles["location-icon"]}>
            <span className={styles["icon-area"]}>
            <LocationIcon/>
            </span>
            <div className={styles["info-area"]}>
              <h3 className={styles["info-heading"]}>Location</h3>
              <p className={styles["info-details"]}>Dehradun,India</p>
            </div>
          </div>
          <div className={styles["mail-icon"]}>
            <span className={styles["icon-area"]}>
             <MailIcon/>
            </span>
            <div className={styles["info-area"]}>
              <h3 className={styles["info-heading"]}>Mail</h3>
              <p className={styles["info-details"]}>kukretikushagra@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React from "react";
import styles from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
const Contact = ({ id, name, number, onDelete }) => {
    return (
     
      <li className={styles.contactItem}>
      <div className={styles.contactInfo}>
        <span className={styles.contactName}><FaUser className={styles.icon}/>{name}</span>
        <span className={styles.contactNumber}><FaPhone className={styles.icon}/>{number}</span>
      </div> 
      <button className={styles.deleteButton} onClick={() => onDelete(id)}>Delete</button>
    </li>
    );
  };

  export default Contact;

import React from "react";
import styles from "./Notifications.module.css";

export const Notification = ({ message }) => {
    return <div className={styles.notification}>{message}</div>;
}
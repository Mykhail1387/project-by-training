import React from 'react';
import styles from './Notification.module.css';

const Notification = ({ message }) => (
    <>
        <p className={styles.text}>{message}</p>
    </>
)

export default Notification;
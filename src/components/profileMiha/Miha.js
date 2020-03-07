import React from 'react';
import PropTypes from 'prop-types';
import styles from './Miha.module.css';

const Miha = ({ src, name, age, profession, phone, marige }) => (
    <>
        <div className={styles.wrapper}>
            <img className={styles.img} src={src} alt="some foto" width="300" />
            <h1>{name}</h1>
            <div className={styles.content}>
                <p>age: {age}</p>
                <p>profession: {profession}</p>
                <p>phone: {phone}</p>
                <p>marige: {marige}</p>
            </div>
        </div>
    </>
)

Miha.propTypes = {
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    profession: PropTypes.string.isRequired,
    phone: PropTypes.string,
    marige: PropTypes.string.isRequired
}

export default Miha;
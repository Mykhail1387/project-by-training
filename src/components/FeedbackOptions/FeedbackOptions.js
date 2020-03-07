import React from 'react';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedbackGood, onLeaveFeedbackNeutral, onLeaveFeedbackBad }) => (
    <div className="btnBlock">
        <button className={styles.btn} type="button" onClick={onLeaveFeedbackGood}>Good</button>
        <button className={styles.btn} type="button" onClick={onLeaveFeedbackNeutral}>Neutral</button>
        <button className={styles.btn} type="button" onClick={onLeaveFeedbackBad}>Bad</button>
    </div>
)

export default FeedbackOptions;
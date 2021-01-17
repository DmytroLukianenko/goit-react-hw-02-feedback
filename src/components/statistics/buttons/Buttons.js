import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const btn = ({ feedbackType, clickHandler }) => {
    return (
        <button
            className={styles.btn}
            key={feedbackType}
            data-action={feedbackType}
            onClick={clickHandler}
        >
            {feedbackType}
        </button>
    );
};

export const Controls = ({ options, clickHandler }) => {
    return options.map(option => btn({ feedbackType: option, clickHandler }));
}



Controls.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    clickHandler: PropTypes.func.isRequired,
};
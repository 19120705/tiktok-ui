import classNames from 'classnames/bind';
import styles from './ToggleSwitch.module.scss';
import React, { useState } from 'react';

const cx = classNames.bind(styles);
function ToggleSwitch() {
    const [checked, setChecked] = useState(true);
    const handleChange = () => {
        if (checked) {
            setChecked(false);
        } else {
            setChecked(true);
        }
    };

    return (
        <label className={cx('switch')}>
            <input type="checkbox" defaultChecked={checked} onClick={handleChange} />
            <span className={cx('slider', 'round')}></span>
        </label>
    );
}

export default ToggleSwitch;

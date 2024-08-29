import { useState } from 'react';
import styles from './FormInput.module.css';

export default function FormInput(props: any) {

    const [focused, setFocused] = useState(false);
    const { label, errorMessage, onChange, id, ...inputProps } = props;

    const handleFocus = (e: Event) => {
        setFocused(true);
    };

    return (
        <div className={styles.container}>
            {/* <label>{label}</label> */}
            <input className={styles.formInput}
                {...inputProps}
                onChange={onChange}
                onBlur={handleFocus}
                onFocus={() =>
                    inputProps.name === "confirmPassword" && setFocused(true)
                }
                focused={focused.toString()}
            />
            <span>{errorMessage}</span>
        </div>
    );
}
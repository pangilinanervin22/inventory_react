import React, { useState } from 'react';
import { ReactComponent as Eye } from "../../assets/svg/Eye.svg";
import { ReactComponent as EyeClose } from "../../assets/svg/EyeCloses.svg";
import styles from "../../styles/components/common/InputPassword.module.scss";




interface PasswordInputProps {
    name: string;
    register: any; // Pass the "register" function from react-hook-form
}

const TestInput: React.FC<PasswordInputProps> = ({ name, register }) => {
    const [isPasswordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible((prevVisible) => !prevVisible);
    };

    return (
        <div className={styles.main}>
            <input
                {...register(name)} // Register the input with react-hook-form
                type={isPasswordVisible ? 'text' : 'password'}
                name={name}
            />
            {isPasswordVisible ? <Eye onClick={togglePasswordVisibility} /> :
                <EyeClose className='' onClick={togglePasswordVisibility} />}
        </div>
    );
};

export default TestInput;
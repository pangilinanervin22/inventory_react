import React, { useState } from 'react';
import { ReactComponent as Eye } from "../../assets/svg/Eye.svg";
import { ReactComponent as EyeClose } from "../../assets/svg/EyeCloses.svg";
import styles from "../../styles/components/common/InputPassword.module.scss";

interface PasswordInputProps {
    path: string;
    register: any; // Pass the "register" function from react-hook-form
}

const TestInput: React.FC<PasswordInputProps> = ({ path, register }) => {
    const [isPasswordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible((prevVisible) => !prevVisible);
    };

    return (
        <div className={styles.main}>
            <input
                {...register(path)} // Register the input with react-hook-form
                type={isPasswordVisible ? 'text' : 'password'}
                name={path}
                placeholder={`TRY: "SamplePassword"`}
            />
            {isPasswordVisible ? <Eye onClick={togglePasswordVisibility} /> :
                <EyeClose className='' onClick={togglePasswordVisibility} />}
        </div>
    );
};

export default TestInput;
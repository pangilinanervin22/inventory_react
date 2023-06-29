import React, { useState } from 'react';
import styles from '../../styles/components/common/DropDownHover.module.scss';

type DropdownProps = {
    trigger: React.ReactNode;
    content: React.ReactNode;
};

const DropDownHover: React.FC<DropdownProps> = ({ trigger, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    };

    return (
        <div className={styles.dropdown_trigger} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div>{trigger}</div>
            {isOpen && <div className={styles.dropdown_content}>{content}</div>}
        </div>
    );
};


export default DropDownHover;

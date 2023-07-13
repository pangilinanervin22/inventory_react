import { useState } from "react";

interface thisProps {
    changeInput: Function;
    limit: number;
    id: string
}

export default function NumberInputExceed({ changeInput, limit, id }: thisProps) {
    const [value, setValue] = useState(1);

    const handleChange = (e: any) => {
        const inputValue = e.target.value;
        if (parseInt(inputValue) > limit || parseInt(inputValue) < 1)
            return;

        setValue(inputValue);
        changeInput(inputValue, id)
    };

    return (
        <input type="number" value={value} onChange={handleChange} />
    );
}


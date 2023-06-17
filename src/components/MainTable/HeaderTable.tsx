import { Column, tableProps } from ".";

interface thisProps {
    tableProps: tableProps;
}


export default function HeaderTable({ tableProps }: thisProps) {
    return (
        <>
            <thead>
                <tr>
                    {tableProps.structure.map((curBase: Column) => (
                        <th key={curBase.label} >
                            {curBase.label}
                        </th>
                    ))}
                </tr>
            </thead>
        </>
    )
}


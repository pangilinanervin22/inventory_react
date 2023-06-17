import { Column, tableProps } from ".";

interface thisProps {
    data: any[];
    tableProps: tableProps;
}


export default function BodyTable({ data, tableProps }: thisProps) {
    console.log(tableProps);

    return (
        <>
            <tbody>
                {data.map((curData) => (
                    <tr key={curData[tableProps.id]}>
                        {tableProps.structure.map((curBase: Column) => (
                            <td key={curBase.label} >
                                {curData[curBase.path!] || curBase.element!(curData[tableProps.id])}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </>
    )
}


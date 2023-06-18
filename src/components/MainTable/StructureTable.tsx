import { Column, tableProps } from ".";

interface thisProps {
    data: any[];
    tableProps: tableProps;
}


export default function BodyTable({ data, tableProps }: thisProps) {
    console.log(tableProps);

    return (
        <table>
            <thead>
                <tr>
                    {tableProps.structure.map((curBase: Column) => (
                        <th key={curBase.label} style={{ width: curBase.width }} >
                            {curBase.label}
                        </th>
                    ))}
                </tr>
            </thead >
            <tbody>
                {data.map((curData) => (
                    <tr key={curData[tableProps.id]} >
                        {tableProps.structure.map((curBase: Column) => (
                            <td key={curBase.label} style={{ width: curBase.width }}  >
                                {curData[curBase.path!] || curBase.element!(curData[tableProps.id])}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody >
        </table>
    )
}


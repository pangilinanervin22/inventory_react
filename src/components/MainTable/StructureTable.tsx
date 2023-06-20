import { Column, sortColumnProps, tableProps } from ".";

interface thisProps {
    data: any[];
    tableProps: tableProps;
    sortColoumn: sortColumnProps;
    handleSortColoumn: Function;
}

export default function BodyTable({ data, tableProps, sortColoumn, handleSortColoumn }: thisProps) {

    return (
        <table>
            <thead>
                <tr>
                    {tableProps.structure.map((curBase: Column) => renderCellHeader(curBase, sortColoumn))}
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

    function renderCellHeader(column: Column, currentSort: sortColumnProps) {

        if (!column.path)
            return <th key={column.label} style={{ width: column.width }} > {column.label} </th>

        return <th key={column.label} style={{ width: column.width }} onClick={() => {
            console.log("hello");

            handleSortColoumn(column.path, currentSort.order);
        }} >
            {column.label} {currentSort.path == column.path && renderIcon(currentSort.order)}
        </th>
    }

    function renderIcon(isAsscending: boolean) {
        return isAsscending ? "asc" : "desc"
    }
}

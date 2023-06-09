import { Column, sortColumnProps, TableStructure } from "../MainTable";
import { ReactComponent as Up } from "../../assets/svg/Arrow_Up.svg";
import { ReactComponent as Down } from "../../assets/svg/Arrow_Down.svg";
import styles from '../../styles/components/Table.module.scss'

interface thisProps {
    data: any[];
    tableProps: TableStructure;
    sortColoumn: sortColumnProps;
    handleSortColoumn: Function;
    handlePick: Function;
}

export default function PickTableBody({
    data,
    tableProps,
    sortColoumn,
    handleSortColoumn,
    handlePick,
}: thisProps) {

    return (
        <table>
            <thead>
                <tr>
                    {tableProps.structure.map((curBase: Column) => renderCellHeader(curBase, sortColoumn))}
                    <>
                        <th style={{ width: "110px", fontSize: "20px" }}>Action</th>
                    </>
                </tr>
            </thead >
            <tbody>
                {data.map((curData) => (
                    <tr key={curData[tableProps.id]} >
                        {tableProps.structure.map((curBase: Column) => (
                            <td key={curBase.label} style={{ width: curBase.width, fontSize: curBase.fontSize }}  >
                                {curBase.element ? curBase.element!(curData) : curData[curBase.path!]}
                            </td>
                        ))}
                        <td key={"delete"} style={{ width: "110px", fontSize: "20px" }}  >
                            <button className={styles.button_update} onClick={() => {
                                handlePick(curData);
                            }}>
                                PICK
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody >
        </table>
    )

    function renderCellHeader(column: Column, currentSort: sortColumnProps) {

        if (!column.path)
            return <th key={column.label} style={{ width: column.width }} > {column.label} </th>

        return <th key={column.label} style={{ width: column.width }}
            onClick={() => { handleSortColoumn(column.path, currentSort.order); }} >
            {column.label} {currentSort.path == column.path && renderIcon(currentSort.order)}
        </th>
    }

    function renderIcon(isAsscending: boolean) {
        return isAsscending ? <Up className={styles.arrow_keys} /> : <Down className={styles.arrow_keys} />
    }

}

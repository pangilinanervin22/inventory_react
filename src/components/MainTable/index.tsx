import React, { useMemo, useState } from "react";
import BodyTable from "./BodyTable";
import ToolTable from "./ToolTable";
import PaginateTable from "./PaginateTable";
import paginate from "../../utils/paginate";
import styles from "../../styles/components/Table.module.scss";



export interface tableProps {
    id: string
    title: string
    searchPath: string,
    structure: Column[]
}

export interface Column {
    label: string;
    path?: string;
    element?: (val: any) => React.ReactElement;
    width: string;
}

interface thisProps {
    data: Array<any>;
    structure: tableProps;
    handleAdd?: Function;
    handleEdit?: Function;
    handleDelete?: Function;
    handleTrash?: Function;
    handleRefresh?: Function;
}

export default function MainTable({
    data,
    structure,
    // handleAdd,
    // handleEdit,
    // handleDelete,
    // handleTrash,
    // handleRefresh,
}: thisProps) {

    const [page, setPage] = useState({
        current: 0,
        size: 5,
    });
    const [searchQuery, setSearchQuery] = useState("");


    let sortedData = structuredClone(data);

    //sorting by search query filter
    sortedData = useMemo(
        () => {
            console.log("search");

            return data.filter((item: any) =>
                item.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
        },

        [searchQuery, data]
    );
    const sizeData = sortedData.length;

    //pagination data
    sortedData = useMemo(
        () => paginate(sortedData, page.current, page.size),
        [page, data]
    );

    return (
        <section className={styles.container_table}>
            <ToolTable text={searchQuery} changeText={onChangeSearchQuery} />
            <table>
                <BodyTable data={sortedData} tableProps={structure} />
            </table>
            <PaginateTable page={page.current} size={page.size} currentTotal={sortedData.length} total={sizeData} handlePage={onHandlePage} />
        </section>
    );

    function onHandlePage(inputValue: number) {
        const currentValue = inputValue * page.size;

        if (currentValue > sortedData.length || currentValue < 0)
            return;

        setPage({ ...page, current: inputValue });
    }

    function onChangeSearchQuery(inputValue: string) {
        setSearchQuery(inputValue);
        setPage({
            ...page,
            current: 0,
        });
    }
}
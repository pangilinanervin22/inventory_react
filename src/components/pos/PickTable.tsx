import React, { useMemo, useState } from "react";
import PaginateTable from "../MainTable/PaginateTable";
import paginate from "../../utils/paginate";
import styles from "../../styles/components/Table.module.scss";
import sortPath from "../../utils/sortPath";
import PickTableBody from "./PickTableBody";
import ToolTable from "../MainTable/ToolTable";

export interface tableProps {
    id: string
    title: string
    searchPath: string,
    structure: Column[]
}

export interface Column {
    label: string;
    width: string;
    fontSize?: string;
    path?: string;
    element?: (val: any) => React.ReactElement;
}

export interface sortColumnProps {
    path: string;
    order: boolean;
}

interface thisProps {
    data: Array<any>;
    structure: tableProps;
    handlePick: Function;
}

export default function PickTable({
    data,
    structure,
    handlePick: handleUpdate,
}: thisProps) {

    const [page, setPage] = useState({
        current: 0,
        size: 5,
    });
    const [searchQuery, setSearchQuery] = useState("");
    const [sortColumn, setSortColumn] = useState<sortColumnProps>({
        path: structure.searchPath,
        order: true,
    });


    let sortedData = structuredClone(data);

    //sorting by search query filter
    sortedData = useMemo(
        () => (data.filter((item: any) => item.name.toLowerCase().includes(searchQuery.toLowerCase()))),
        [searchQuery, data]
    );
    const sizeData = sortedData.length;

    //sorting by path
    sortedData = useMemo(
        () => {
            console.log("sort", sortColumn);
            return (sortedData = sortPath(sortedData, sortColumn.path, sortColumn.order))
        },
        [sortColumn, searchQuery, data]);

    //pagination data
    sortedData = useMemo(
        () => paginate(sortedData, page.current, page.size),
        [sortColumn, page, data]
    );

    return (
        <section className={styles.container_table} style={{ border: "solid 3px", borderRadius: "0", height: "500px" }}>
            <ToolTable
                searchValue={searchQuery}
                changeText={onChangeSearchQuery}
                isHaveAdd={false}
            />
            <PickTableBody
                data={sortedData}
                tableProps={structure}
                sortColumn={sortColumn}
                handleSortColumn={onHandleSortColumn}
                handlePick={handleUpdate}
            />
            <PaginateTable page={page.current} size={page.size} currentTotal={sortedData.length} total={sizeData} handlePagination={onHandlePagination} />
        </section>
    );

    function onHandlePagination(inputValue: number) {
        const currentValue = inputValue * page.size;

        if (currentValue >= sizeData || currentValue < 0) return;

        setPage({ ...page, current: inputValue });
    }

    function onChangeSearchQuery(inputValue: string) {
        setSearchQuery(inputValue);
        setPage({
            ...page,
            current: 0,
        });
    }

    function onHandleSortColumn(path: string, order = true) {
        const temp = { order, path };
        if (temp.path == sortColumn.path)
            temp.order = temp.order ? false : true;

        setSortColumn({ order: temp.order, path: temp.path });
        setPage({
            ...page,
            current: 0,
        });
    }

}
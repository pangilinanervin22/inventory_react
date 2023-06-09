import React, { useMemo, useState } from "react";
import StructureTable from "./StructureTable";
import ToolTable from "./ToolTable";
import PaginateTable from "./PaginateTable";
import paginate from "../../utils/paginate";
import styles from "../../styles/components/Table.module.scss";
import sortPath from "../../utils/sortPath";

export interface TableStructure {
    id: string
    title: string
    searchPath: string,
    defaultSort?: string,
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
    isEditable: boolean;
    structure: TableStructure;
    handleAdd: Function;
    handleUpdate: Function;
    handleDelete: Function;
    handleTrash?: Function;
    handleRefresh?: Function;
}

export default function MainTable({
    data,
    isEditable,
    structure,
    handleAdd,
    handleUpdate,
    handleDelete,
}: thisProps) {

    const [page, setPage] = useState({
        current: 0,
        size: 5,
    });
    const [searchQuery, setSearchQuery] = useState("");
    const [sortColumn, setSortColumn] = useState<sortColumnProps>({
        path: structure.defaultSort || structure.searchPath,
        order: true,
    });


    let sortedData = structuredClone(data);

    //sorting by search query filter
    sortedData = useMemo(
        () => (searchQuery ? sortedData.filter((item: any) => item.name.toLowerCase().includes(searchQuery.toLowerCase())) : sortedData),
        [searchQuery, data]
    );

    //get total data filterd by search
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
        <section className={styles.container_table}>
            <ToolTable text={searchQuery}
                isEditable={isEditable}
                changeText={onChangeSearchQuery}
                title={structure.title}
                handleAdd={handleAdd}
            />
            <StructureTable
                isEditable={isEditable}
                data={sortedData}
                tableProps={structure}
                sortColoumn={sortColumn}
                handleSortColoumn={onHandleSortColoumn}
                deleteColoumn={onDelete}
                updateColoumn={handleUpdate}
            />
            <PaginateTable page={page.current} size={page.size} currentTotal={sortedData.length} total={sizeData} handlePagination={onHandlePagination} />
        </section>
    );

    function onDelete(data: any) {
        handleDelete(data);
        setPage({
            ...page,
            current: 0,
        });
    }

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

    function onHandleSortColoumn(path: string, order = true) {
        const temp = { order, path };
        if (temp.path == sortColumn.path)
            temp.order = temp.order ? false : true;

        setSortColumn({ order: temp.order, path: temp.path });
    }

}
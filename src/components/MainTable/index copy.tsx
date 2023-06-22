import { useState } from "react";
import BodyTable from "./StructureTable";



interface thisProps {
    data: Array<any>;
    base: Array<any>;
    handleAdd?: Function;
    handleEdit?: Function;
    handleDelete?: Function;
    handleTrash?: Function;
    handleRefresh?: Function;
}

interface sortColumnProps {
    path: string;
    order: "asc" | "desc";
}

export interface cellBase {
    path: string;
    label: string;
}

export default function MainTable({
    data,
    base,
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

    const [checkList, setCheckList] = useState<string[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [sortColumn, setSortColumn] = useState<sortColumnProps>({
        path: "name",
        order: "asc",
    });

    // const { current, size } = page;
    let sortedData = [...data];

    //sorting by search query filter
    // sortedData = useMemo(
    //     () =>
    //         data.filter((item: any) =>
    //             item.name.toLowerCase().includes(searchQuery.toLowerCase())
    //         ),
    //     [searchQuery, data]
    // );

    // declare size of table it may depends on the filter query
    let sizeData = sortedData.length;
    //sorting by path
    // sortedData = useMemo(
    //     () =>
    //     (sortedData = sortPath(
    //         sortedData,
    //         sortColumn.path,
    //         sortColumn.order
    //     )),
    //     [sortColumn, searchQuery, data]
    // );
    // pagination table
    // sortedData = useMemo(
    //     () => paginate(sortedData, current, size),
    //     [page, data]
    // );

    return (
        <>
            <table>
                <BodyTable base={sortedData} content={base} onHandleDelete={handleDelete} onHandleEdit={handleEdit} />
            </table>


        </>
    );

    function handlePage(value: number) {
        setPage({ ...page, current: value });
    }

    function handlePageSize(event: any) {
        setPage({
            size: event.target.value,
            current: 0,
        });
    }

    function handleHeaderClick(path: string) {
        let tempSortColumn = { ...sortColumn };

        if (tempSortColumn.path === path)
            tempSortColumn.order =
                tempSortColumn.order === "asc" ? "desc" : "asc";
        else tempSortColumn = { path, order: "asc" };

        setSortColumn(tempSortColumn);
        setPage({
            ...page,
            current: 0,
        });
    }

    function handleSearch(value: string) {
        setSearchQuery(value);
        setPage({
            ...page,
            current: 0,
        });
    }

    function handleAdd() {
        handleAdd();
    }

    function handleEdit(id: string) {
        handleEdit(id);
    }

    function handleDelete(id: string) {
        setCheckList([]);
        setPage({
            ...page,
            current: 0,
        });
    }
}


function handleRefresh() {
    handleRefresh();
}

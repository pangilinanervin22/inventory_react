import styles from '../../styles/components/Table.module.scss'

interface thisProps {
    size: number,
    page: number,
    total: number;
    currentTotal: number;
    handlePagination: Function;
}

export default function PaginateTable({ page, size, total, currentTotal, handlePagination }: thisProps) {
    const pageStart = page * size;
    const pageEnd = pageStart + currentTotal;


    return (
        <section className={styles.paginate_table}>
            <p>{`${pageStart + 1}-${pageEnd} of ${total}`}</p>
            <button onClick={() => handlePagination(page - 1)}>left</button>
            <button onClick={() => handlePagination(page + 1)}>right</button>
        </section>
    )
}

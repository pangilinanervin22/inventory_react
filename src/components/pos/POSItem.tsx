
export default function POSItem({ data }: { data: any }) {
    return (
        <>
            {data.map(item => <div className={styles.list_item}>
                <div>{item.name}</div>
                <div>{getDate(item.production_date)}</div>
                <div>{getDate(item.expiration_date)}</div>
                <div>{item.quantity}</div>
                <div>{item.price}</div>
                <input type="number" />
            </div>)}
        </>
    )
}

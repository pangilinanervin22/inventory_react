import { useMemo, useState } from 'react';
import { ReactComponent as Add } from "../../assets/svg/Add.svg";
import NumberInputExceed from './NumberInput';
import PickTable from './PickTable';
import { TableStructure } from '../MainTable';
import { useMutation, useQuery } from '@tanstack/react-query';
import { getStock } from '../../api/StockApi';
import { iStock } from '../../utils/types';
import { toast } from 'react-toastify';
import { postManySales } from '../../api/SalesApi';
import { mainQueryClient } from '../../api';
import styles from '../../styles/components/POSComponent.module.scss'
import { useModalStore } from '../common/ModalContainer';
import { convertDate } from '../../utils/date';

export interface valueItem {
    quantity: number;
    stock_id: string;
    price: number;
}

const bodyTable: TableStructure = {
    title: "Stock",
    id: "stock_id",
    searchPath: "name",
    defaultSort: "production_date",
    structure: [
        { label: "Product", path: "name", width: "250px", fontSize: "20px" },
        { label: "Quantity", path: "quantity", element: ((val) => <span style={{ color: val["quantity"] < 5 ? "red" : "" }}>{val["quantity"]}</span>), width: "150px", fontSize: "20px" },
        { label: "Production Date", path: "production_date", element: ((val) => <span>{convertDate(val["production_date"])}</span>), width: "210px", fontSize: "20px" },
        { label: "Expiration Date", path: "expiration_date", element: ((val) => <span>{convertDate(val["expiration_date"])}</span>), width: "210px", fontSize: "20px" },
    ]
};

function POSComponent() {
    const [showPick, setShowPick] = useState(false);
    const [valueList, setValueList] = useState<valueItem[]>([]);
    const [visualList, setVisualList] = useState<any[]>([]);
    const { data, isSuccess } = useQuery<any[]>(["stock"], getStock);
    const closeModal = useModalStore(state => state.closeModal);

    const { mutate: createSales } = useMutation(postManySales, {
        onSuccess: () => {
            mainQueryClient.invalidateQueries({ queryKey: ["sales"] })
            closeModal();
        },
    });

    const total = useMemo(() => valueList.reduce((accumulator, item: valueItem) => {
        const multipliedValue = item.price * item.quantity;
        return accumulator + multipliedValue;
    }, 0), [valueList])


    console.log(total, valueList);

    return (
        <>
            <section className={styles.container}>

                <div className={styles.header}>
                    <div className={styles.add_button} onClick={() => setShowPick(true)}>
                        <Add />
                        <button>Add Product</button>
                    </div>
                </div>

                <div className={styles.list}>
                    <div className={styles.list_header}>
                        <div>Name</div>
                        <div>Product Date</div>
                        <div>Expiration Date</div>
                        <div>Quantity</div>
                        <div>Price</div>
                        <div>Input</div>
                    </div>
                    <div className={styles.list_container}>
                        {visualList.length && visualList.map((item: any) => <div key={item.stock_id} className={styles.list_item}>
                            <div>{item.name}</div>
                            <div>{convertDate(item.production_date)}</div>
                            <div>{convertDate(item.expiration_date)}</div>
                            <div>{item.quantity}</div>
                            <div>{item.price}</div>
                            <NumberInputExceed id={item.stock_id} limit={item.quantity} changeInput={onChangeInput} />
                            <button onClick={() => removeItem(item.stock_id)} className={styles.button_delete}>x</button>
                        </div>)}
                    </div>
                </div>

                <div className={styles.form_input}>
                    <label htmlFor="">Total Sales</label>
                    <div className={styles.form_value}>{total}</div>
                </div>
                <div className={styles.form_input}></div>

                <div className={styles.button_group}>
                    <button className={styles.button_update}
                        disabled={(total <= 0) || showPick}
                        onClick={() => {
                            console.log("click", total, valueList);
                            createSales(valueList);
                        }}>
                        Confirm
                    </button>
                    <button className={styles.button_delete}
                        disabled={showPick}
                        onClick={closeModal} >
                        Cancel
                    </button>
                </div>
            </section>

            {showPick && <section className={styles.pick_table_container}>
                <button className={styles.button_close}
                    onClick={() => setShowPick(false)}>
                    X
                </button>
                <PickTable
                    data={isSuccess ? data : []}
                    handlePick={addItem}
                    structure={bodyTable}
                />
            </section>
            }
        </>
    );

    function removeItem(input: string) {
        const updateVisualList = visualList.filter((item: iStock) => item.stock_id !== input);
        const updateListValue = valueList.filter((item) => item.stock_id !== input);

        setVisualList(updateVisualList);
        setValueList(updateListValue);
    }

    function addItem(inputData: any) {
        const index = visualList.findIndex((item: iStock) => item.stock_id === inputData.stock_id)

        if (index !== -1) {
            toast.error("Already added")
            return;
        }

        setVisualList(oldArray => [...structuredClone(oldArray), inputData]);
        setValueList(oldArray => [...structuredClone(oldArray),
        { quantity: 1, stock_id: inputData.stock_id, price: inputData.price }]);

        setShowPick(false)
    }

    function onChangeInput(inputValue: number, id: string) {
        const index = valueList.findIndex(item => item.stock_id === id)

        if (index !== -1) {
            const updatedData = [...valueList]; // Create a copy of the array
            updatedData[index].quantity = inputValue; // Update the desired property of the object

            setValueList(updatedData); // Update the state with the modified array
        }
    }
};

export default POSComponent;
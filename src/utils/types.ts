export interface iProduct {
    product_id?: string;
    name: string;
    price: number;
    brand: string;
}

export interface iStock {
    stock_id?: string;
    product_id: string;
    quantity: number;
    production_date: Date;
    expiration_date: Date;
}

export interface iSales {
    sales_id?: string;
    product_id: string;
    total_price: number;
    date: Date;
}

export interface iEmployee {
    employee_id?: string;
    name: string;
    username: string;
    password?: string;
    contact_no: string;
    position: string;
    img_src: string;
}
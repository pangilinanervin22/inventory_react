export function convertStringDate(input: string) {
    const date = new Date(input);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    const temp1 = month < 10 ? "0" : "";
    const temp2 = day < 10 ? "0" : "";

    return `${year}-${temp1}${month}-${temp2}${day}`;
}

export function convertDate(input: Date) {
    const date = new Date(input);
    const month = date.getMonth() + 1; // getMonth() returns a zero-based index, so we add 1
    const day = date.getDate();
    const year = date.getFullYear();

    return `${month}/${day}/${year}`;
}
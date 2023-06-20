export default function sortPath(array: any[], path: string, order: boolean) {

    try {
        array = array.sort(function (a, b) {
            let x = a[path].toUpperCase(),
                y = b[path].toUpperCase();
            return x === y ? 0 : x > y ? 1 : -1;
        });
    } catch (e) {
        array = array.sort(function (a, b) {
            let x = a[path],
                y = b[path];
            return y === x ? 0 : y > x ? 1 : -1;
        });
    }

    return order ? array : array.reverse();
}
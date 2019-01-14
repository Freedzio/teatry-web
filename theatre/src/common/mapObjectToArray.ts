export function mapObjectToArray(obj: any) {
    return Object.keys(obj).map((item) => obj[item]);
}

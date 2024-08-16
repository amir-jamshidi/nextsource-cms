export const Parser = (value: any) => {
    return JSON.parse(JSON.stringify(value));
}
export function undefinedControl(value: any) {
    if (value === undefined || value === null || value === "") return "-";
    else return value;
}
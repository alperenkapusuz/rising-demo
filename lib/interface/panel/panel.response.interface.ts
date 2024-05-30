import { ReactNode } from "react";

export interface IResponseInfo {
    expireTime: string,
    lastChargeAmount:string,
    lastCharge: string,
    totalDataUsage: string,
    dailyUsage: string
} 

export interface ICard {
    bgColor: "blue" | "gray";
    fontWeight: "medium" | "bold";
    title: string;
    value: ReactNode  | undefined  | string;
}

export interface ITableData<T = any> {
    data?: T;
}
export interface IResponseTable {
    type: string;
    location: string;
    rental: string;
    ipcount: string;
    purpose: string;
    date: string;
}


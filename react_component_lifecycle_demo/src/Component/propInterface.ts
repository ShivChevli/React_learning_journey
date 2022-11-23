import React from "react";

export interface BtnProperties {
    typeBtn?: "default" | "primary",
    onClick: any
}

export interface UserManCompProp {

}

export interface UserManCompStat {
    UseList: ApiData[],
    counter: number,
    message: string
}



export interface ApiData {
    "id": number,
    "email": string,
    "first_name": string,
    "last_name": string,
    "avatar": string
}

export interface Diaplayuser {
    UserData: ApiData
}
import React from 'react';
import { BtnProps } from './interface';

export const Btn: React.FC<BtnProps> = ({ classname = "primary", children, type }) => {

    return <button className={classname} type={type} > {children} </button>
}
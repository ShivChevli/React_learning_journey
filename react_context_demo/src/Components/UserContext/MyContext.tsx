import React from 'react';
import { Context } from "./contextInterFace"

export const MyContext = React.createContext<Context>({
    user: [
        { key: "Shiv", value: 100 }
    ],
    updateUser: (us: { key: string, value: number }) => { }
})
MyContext.displayName = "UserList Data"
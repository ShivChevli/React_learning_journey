export interface Context {
    user: [{ key: string, value: number }],
    updateUser(user: { key: string, value: number }): any
}
export type User = {
    uid: string,
    username: string
}


export const getUser = (): User => ({ uid: "ABC123", username: "El_Papi05" });


export const getActiveUser = (name: string): User => ({ uid: "ABC123", username: name });
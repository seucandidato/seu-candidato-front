export interface responseUser {
    message: string,
    data: {
        name: string,
        username: string,
        email: string,
        phone: string
        password: string,
        profile: number,
        createdAt: string,
        updatedAt: string,
        hash: string,
        id: number,
        active: boolean
    }
}
export interface IUserInfo {
    userEmail: string;
    password: string
}

export interface IJwtToken {
    token: string,
    expires: number
}
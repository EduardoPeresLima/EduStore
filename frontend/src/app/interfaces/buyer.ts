export interface BuyerCreate {
    name: string,
    primary_email: string
    password: string
    primary_phone_number: string
}

export interface BuyerLogin{
    email: string,
    password: string
}
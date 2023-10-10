export interface NormalUser {
    name: string,
    email: string,
    password: string,
}

export interface GoogleUser {
    iss?: string,
    nbf?: number,
    aud?: string,
    sub?: string,
    email: string,
    password?: string,
    email_verified?: boolean,
    azp?: string,
    name: string,
    picture?: string,
    given_name?: string,
    family_name?: string,
    iat?: number,
    exp?: number,
    jti?: string
}
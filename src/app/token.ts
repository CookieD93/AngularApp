export interface myToken {
    Token : string
    payload : Payload
}
export interface Payload{
    iss: string
    aud: string
    exp: string
    CID: string
}
// {"iss": "Local","aud": "Local","exp": "28-05-2018 21:47:55","CID": "daniel"}

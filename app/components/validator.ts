import { Details } from "./details";

export class Validator {
    static validateDetails(details: Details) {
        if (Validator.isEmpty(details.firstName) ||  Validator.isEmpty (details.lastName) || Validator.isInvalidEmail(details.email))
            throw new Error("Invalid Data");
    }
    
    static isEmpty(text: string) : boolean {
        return (text==null ||  text.trim().length == 0)
    }
    
    static isInvalidEmail(email: string): boolean {
        const regexp = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
        return !regexp.test(email)
    }
}
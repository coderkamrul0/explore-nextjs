/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService {
    
    signup(){
        return {msg: 'Sign UP'}
    }

    signin(){
        return {msg: 'Sign In'}
    }

}

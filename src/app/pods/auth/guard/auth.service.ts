import { Injectable } from '@angular/core'

@Injectable({
    providedIn: "root"
})
export class AuthService {
    
    public isAuthenticated(): boolean {

        const account = JSON.parse(window.localStorage.getItem('account'))

        if(account) {
            return true
        }

        return false
    }
}
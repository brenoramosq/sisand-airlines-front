import httpService from '../../../config/http-service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SharedStateService {
  
    private infoSource = new BehaviorSubject<any | null>(null);
    private infoCount = new BehaviorSubject<number>(0);
    private loginSource = new BehaviorSubject<boolean>(false);

    info$ = this.infoSource.asObservable();
    countShoppingCart$ = this.infoCount.asObservable(); 
    login$ = this.loginSource.asObservable();
    
    list: any[] = [];
  
    setInfo(newInfo: any) {
        this.infoSource.next(newInfo);         
    }

    setCount(seat:number) {     
        this.infoCount.next(seat);      
    }

    clearItems() {
        this.infoCount.next(0); 
    }

    clearAfterChanges(currentTotal: number) {
        this.infoCount.next(currentTotal);
    }

    setLogin(state: boolean) {
        this.loginSource.next(state);
    }

    async finalizeCart() {  

        for (const item of this.list) {
            console.log(item);
        }
        
        // const response = await httpService.post(`v1/shopping-cart/create-with-items`, body);
        // return response;
    }
}
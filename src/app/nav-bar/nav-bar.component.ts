import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SharedStateService } from '../shopping-cart/service/shopping-cart-service'; // ajuste o caminho conforme necessário
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  imports: [CommonModule]
})
export class NavBarComponent implements OnInit {

  info: any[] = [];
  count: number = 0;
  isLogged: boolean = false;
 
  constructor(
    private sharedState: SharedStateService, 
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.sharedState.countShoppingCart$.subscribe(data => {      
        this.count = data;      
    });

     this.sharedState.login$.subscribe(data => {           
     this.isLogged = data;
     this.cdr.detectChanges();
    });
  }

  logout() {
    this.sharedState.setLogin(false);
    this.isLogged = false;
  }
}

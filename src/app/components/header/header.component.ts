import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/model/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  cartQunatity =0;
  user!:User
  constructor(cartService:CartService , private userService:UserService){
    cartService.getCartObservable().subscribe((newCart)=>{
      this.cartQunatity = newCart.totalCount;
    })
     userService.userObservable.subscribe((newUser)=>{
      this.user= newUser;
     })
  }

  ngOnInit(): void {

  }
  logout(){
    this.userService.logout();
  }
  get isAuth(){
    return this.user.token;
  }

}

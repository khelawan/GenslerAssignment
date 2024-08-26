import { Component, OnInit } from '@angular/core';
import { SelectedDataService } from '../services/selected-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  productsCount?:number;

constructor(private dataService:SelectedDataService){}

  ngOnInit(): void {
   this.dataService.getCartCount().subscribe((res:number)=>{  // fetching the category the user has selected
    this.productsCount = res;
   })
  }
 

}

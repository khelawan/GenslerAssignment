import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SelectedDataService } from '../services/selected-data.service';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css'
})
export class AccordionComponent implements OnInit {
  showBody: boolean = false;
  catogories: any = [];


  constructor(private http: HttpClient, private selectedData: SelectedDataService
  ) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {  // service call for categories and sub catogories for accordian
    this.http.get("https://gensler-project-default-rtdb.firebaseio.com/categories.json")
      .subscribe((res: any) => {
        let catogoriesValue = res;

        this.catogories =
          catogoriesValue.map((item: any) => {
            return {
              ...item,
              showSubCategories: false,
            }
         });
        this.initialPage();
      });
  }

  initialPage(){
    this.toggle(this.catogories[0]);
    this.subCategorySelect(this.catogories[0].list[0]);
  }


  toggle(category: any) {  // to open the accordian
    this.catogories.forEach((item: any) => {
      if (item.title === category.title) {
        item.showSubCategories = !item.showSubCategories;
      } else {
        item.showSubCategories = false;
      }
    })
  }

  subCategorySelect(categorySelected:string){   
    this.selectedData.setSelectedCategory(categorySelected);
  }

}

import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {

  categorys = null;

  constructor(public cs: CategoryService) { }

  listCategory() {
    this.cs.categoryAPI().subscribe(
      (data) => {
        this.categorys = data;
      }
    );
  }

  ngOnInit(): void {
    this.listCategory();
  }
}

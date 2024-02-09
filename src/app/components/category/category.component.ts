import { Component } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  showAutosComponent = false;

  toggleAutosComponent() {
    this.showAutosComponent = !this.showAutosComponent;
  }
}

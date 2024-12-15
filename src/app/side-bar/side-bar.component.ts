import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component,  input,  Input,  TemplateRef } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  imports: [CommonModule],
  standalone: true, 
  
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {

  @Input() mainNavTemplate!: any;
  @Input() subNavTemplate!: any;

  @Input() mainNavItems?: string[];
  @Input() subNavItems?: string[];
  
  //future logic
}

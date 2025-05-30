import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarService } from '../services/sidebar.service';

@Component({
  selector: 'app-main',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  sideBarService = inject(SidebarService);
}

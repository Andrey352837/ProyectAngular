import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SidebarService } from '../services/sidebar.service';

@Component({
  selector: 'app-left-sidebar',
  imports: [RouterModule, CommonModule, RouterOutlet],
  templateUrl: './left-sidebar.component.html',
  styleUrl: './left-sidebar.component.css'
})
export class LeftSidebarComponent {
 
  items = [
    {
      routeLink: 'dashboard',
      icon: 'fal fa-home',
      label: 'Dashboard',
    },
    {
      routeLink: 'products',
      icon: 'fal fa-box-open',
      label: 'Products',
    },
    {
      routeLink: 'mantenimientos',
      icon: 'fal fa-file',
      label: 'Mantenimientos',
      mantenimientos: [
        {
          "routeLink": "usuario",
          "icon": "fal fa-user",
          "label": "Usuario"
        },
        {
          "routeLink": "cargo",
          "icon": "fal fa-briefcase",
          "label": "Cargo"
        },
        {
          "routeLink": "carrera",
          "icon": "fal fa-graduation-cap",
          "label": "Carrera"
        },
        {
          "routeLink": "planestudios",
          "icon": "fal fa-book",
          "label": "Plan de Estudios"
        },
        {
          "routeLink": "cuatrimestre",
          "icon": "fal fa-calendar-alt",
          "label": "Cuatrimestre"
        },
        {
          "routeLink": "materia",
          "icon": "fal fa-chalkboard-teacher",
          "label": "Materia"
        },
        {
          "routeLink": "curso",
          "icon": "fal fa-school",
          "label": "Curso"
        },
        {
          "routeLink": "oferta-academica",
          "icon": "fal fa-university",
          "label": "Oferta Académica"
        },
        {
          "routeLink": "historico-academico",
          "icon": "fal fa-history",
          "label": "Histórico Académico"
        },
        {
          "routeLink": "auditoria",
          "icon": "fal fa-clipboard-list",
          "label": "Auditoría"
        },
        {
          "routeLink": "encabezado-factura",
          "icon": "fal fa-file-invoice",
          "label": "Encabezado Factura"
        },
        {
          "routeLink": "detalle-factura",
          "icon": "fal fa-receipt",
          "label": "Detalle Factura"
        }
        ]
      
    
  },
    {
      routeLink: 'settings',
      icon: 'fal fa-cog',
      label: 'Settings',
    },
  ];

 
  selectedItem = this.items.length > 0 ? this.items[2] : null;



  sideBarService = inject(SidebarService);

  toggleCollapse(): void {
    this.sideBarService.setIsSidebarCollapesed = !this.sideBarService.isSidebarCollapsed;
  }

  closeSidenav(): void {
    this.sideBarService.setIsSidebarCollapesed = false;
  }
}

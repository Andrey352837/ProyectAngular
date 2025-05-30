import { Routes } from '@angular/router';
//menu
import {DashboardComponent} from './dashboard/dashboard.component'
import {PagesComponent} from './pages/pages.component'
import {SettingsComponent} from './settings/settings.component'
import {ProductsComponent} from './products/products.component'

//mantenimientos
import {MantenimientosComponent} from './mantenimientos/mantenimientos.component'
import {CargoComponent} from './cargo/cargo.component'
import {UsuarioComponent} from './usuario/usuario.component'
import {CarreraComponent} from './carrera/carrera.component'
import {PlanestudioComponent} from './planestudio/planestudio.component'
import {CuatrimestreComponent} from './cuatrimestre/cuatrimestre.component'
import {MateriaComponent} from './materia/materia.component'
import {CursoComponent} from './curso/curso.component'
import {OfertaacademicaComponent} from './ofertaacademica/ofertaacademica.component'
import {HistoricoacademicoComponent} from './historicoacademico/historicoacademico.component'
import {AuditoriaComponent} from './auditoria/auditoria.component'
import {FacturaComponent} from './factura/factura.component'

//procesos

import path from 'path';
export const routes: Routes = [
  
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    //menu
    {path: 'dashboard', component: DashboardComponent},
    {path: 'pages', component: PagesComponent},
    {path: 'settings', component: SettingsComponent},
    {path: 'products', component: ProductsComponent},
    //Mantenimientos
    {path: 'mantenimientos', component: MantenimientosComponent},
    {path: 'cargo', component: CargoComponent},
    {path: 'usuario', component: UsuarioComponent},
    {path: 'carrera', component: CarreraComponent},
    {path: 'planestudios', component: PlanestudioComponent},
    {path: 'cuatrimestre', component: CuatrimestreComponent},
    {path: 'materia', component: MateriaComponent},
    {path: 'curso', component: CursoComponent},
    {path: 'ofertaacademica', component: OfertaacademicaComponent},
    {path: 'historicoacademico', component: HistoricoacademicoComponent},
    {path: 'auditoria', component: AuditoriaComponent},
    {path: 'factura', component: FacturaComponent},

    
];

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColombiaComponent } from './productos/colombia/colombia.component';
import { MallasColComponent } from './productos/mallas-col/mallas-col.component';
import { NacionalComponent } from './productos/nacional/nacional.component';
import { PeruComponent } from './productos/peru/peru.component';
import { ProductosComponent } from './productos/productos.component';
import { VariosComponent } from './productos/varios/varios.component';

const routes: Routes = [
  { path: '', redirectTo: '/productos', pathMatch: 'full' },
  { path: 'productos', component: ProductosComponent },
  { path: 'productos/imp-pe', component: PeruComponent },
  { path: 'productos/imp-co', component: ColombiaComponent },
  { path: 'productos/termicos', component: NacionalComponent },
  { path: 'productos/varios', component: VariosComponent },
  { path: 'productos/mallitas', component: MallasColComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

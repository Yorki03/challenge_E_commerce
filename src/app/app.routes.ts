import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', 
        loadChildren: () => import('./pages/productos/productos.routing').then(m => m.PRODUCT_ROUTES)
    },
    
    
];
import {NgModule, Component} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
    {
        path:'pokemod',
        loadChildren: () => import('src/app/pokemod/pokemod.module').then(m => m.PokeModModule)    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule {}
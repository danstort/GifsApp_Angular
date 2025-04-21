import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: 'dashboard',
        loadComponent: () =>
            import('./gifs/pages/dashboard-page/dashboard-page.component'),   //es necesario añadir export default en el componente para manejar la promesa.
        children: [

            {
                path: 'trending',
                loadComponent: () =>
                    import('./gifs/pages/trending-page/trending-page.component'),   //es necesario añadir export default en el componente para manejar la promesa.
            },
        
            {
                path: 'search',
                loadComponent: () =>
                    import('./gifs/pages/search-page/search-page.component'),   //es necesario añadir export default en el componente para manejar la promesa.
            },


            {
                path: '**',
                redirectTo: 'trending'
            }

        ]
    },

    

    {
        path: '**',
        redirectTo: 'dashboard',
    }
];

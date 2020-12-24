import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LeftNavTemplateComponent} from './template/left-nav-template.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

export const routes: Routes = [{
  path: '',
  redirectTo: 'dashboard',
  pathMatch: 'full'
}, {
  path: '',
  component: LeftNavTemplateComponent,
  data: {
    title: 'Angular Admin Template'
  },
  children: [
    {
      path: 'dashboard',
      loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
      data: {
        title: 'Dashboard Page'
      },
    },
    {
      path: 'network',
      loadChildren: () => import('./network/network.module').then(m => m.NetworkModule),
      data: {
        title: 'Networks'
      },
    },
    {
      path: 'learningbase',
      loadChildren: () => import('./learning-base/learning-base.module').then(m => m.LearningBaseModule),
      data: {
        title: 'Learning Base'
      },
    },
    {
      path: 'train',
      loadChildren: () => import('./train-network/train-network.module').then(m => m.TrainNetworkModule),
      data: {
        title: 'Train Network'
      },
    },
    {
      path: 'config',
      loadChildren: () => import('./config/config.module').then(m => m.ConfigModule),
      data: {
        title: 'Config'
      },
    },
    {
      path: 'ui-elements',
      loadChildren: () => import('./ui-elements/ui-elements.module').then(m => m.UiElementsModule),
      data: {
        title: 'UI Elements'
      },
    },
    {
      path: 'forms',
      loadChildren: () => import('./forms/forms.module').then(m => m.FormsModule),
      data: {
        title: 'Form Page'
      },
    }
  ]
}, {
  path: 'tables',
  component: LeftNavTemplateComponent,
  data: {
    title: 'Tables'
  },
  children: [
    {
      path: '',
      loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule)
    }
  ]
}, {
  path: '**',
  component: PageNotFoundComponent
}];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}

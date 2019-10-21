import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate: [AuthGuard]
  },

  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },

  {
    path: 'settings',
    loadChildren: './settings/settings.module#SettingsPageModule',
    canActivate: [AuthGuard]
  },

  {
    path: 'items',
    loadChildren: './items/items.module#ItemsPageModule',
    canActivate: [AuthGuard]
  },
  { path: 'logout', loadChildren: './logout/logout.module#LogoutPageModule' },
  {
    path: 'program',
    loadChildren: './program/program.module#ProgramPageModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'calendar',
    loadChildren: './calendar/calendar.module#CalendarPageModule',
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// Route Configuration
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'home', loadChildren: './home/home.module#HomeModule' },
  { path: 'login', loadChildren: './login/login.module#LoginModule' }
  // { path: 'home', component: HomeComponent },
  // // { path: 'profile', redirectTo:'dashboard/profile'},
  // { path: 'profile/:username', loadChildren: './profile/profile.module#ProfileModule' },
  // { path: 'database', loadChildren: './database/database.module#DatabaseModule' },
  // { path: 'about', loadChildren: './about/about.module#AboutModule' },
  // { path: 'api', loadChildren: './api/api.module#ApiModule'  },
  // // { path: 'search', loadChildren: './search/search.module#SearchModule' },
  // { path: 'unauthorized', component: UnauthorizedComponent },
  // { path: 'dataset/:domain/:acc', loadChildren: './dataset/dataset.module#DatasetModule' },
  //   // { path: 'search', loadChildren: () => SearchModule },
  //   { path: 'search', component: SearchComponent },
  // { path: 'terms', component: TermsComponent },
  // { path: 'notfound', component: NotfoundComponent },
  // { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
  // { path: 'selected', component: SelectedComponent },
  // { path: 'merge', loadChildren: './merge/merge.module#MergeModule' },
  // { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
  // { path: 'dashboard/selected', loadChildren: './dashboardselected/dashboardselected.module#DashboardselectedModule'},
  // { path: 'dashboard/feedback', loadChildren: './dashboardfeedback/dashboardfeedback.module#DashboardfeedbackModule'},
  // { path: 'dashboard/profile', loadChildren: './dashboardprofile/dashboardprofile.module#DashboardprofileModule'},
  // { path: 'dashboard/update', loadChildren: './dashboardupdate/dashboardupdate.module#DashboardupdateModule'},
  // { path: 'dashboard/claimed', loadChildren: './dashboardclaimed/dashboardclaimed.module#DashboardclaimedModule'},
  // { path: 'dashboard/picture', loadChildren: './dashboardpicture/dashboardpicture.module#DashboardpictureModule'},
  // { path: 'dashboard/settings', loadChildren: './dashboardsettings/dashboardsettings.module#DashboardsettingsModule'}
  // { path: 'welcome/:inviteId', component: WelcomeComponent },

];

// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: false });

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { VexRoutes } from "src/@vex/interfaces/vex-route.interface";
import { CustomLayoutComponent } from "./custom-layout/custom-layout.component";

const routes: VexRoutes = [
  {
    path: "",
    component: CustomLayoutComponent,
    children: [],
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/pages/auth/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/pages/auth/register/register.module').then(m => m.RegisterModule),
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/pages/auth/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule),
  },
  {
    path: "apps",
    children: [
      {
        path: "aio-table",
        loadChildren: () =>
          import("./pages/apps/aio-table/aio-table.module").then(
            (m) => m.AioTableModule
          ),
      },
    ],
  },
      
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration: "enabled",
      relativeLinkResolution: "corrected",
      anchorScrolling: "enabled",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

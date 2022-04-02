import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { VexRoutes } from "src/@vex/interfaces/vex-route.interface";
import { CustomLayoutComponent } from "./custom-layout/custom-layout.component";
import {
  AuthGuard,
  canActivate,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from "@angular/fire/auth-guard";

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(["login"]);
const redirectLoggedInToHome = () => redirectLoggedInTo(["/apps/aio-table"]);

const routes: VexRoutes = [
  {
    path: "",
    component: CustomLayoutComponent,
    ...canActivate(redirectLoggedInToHome),
    ...canActivate(redirectUnauthorizedToLogin),

  },
  {
    path: "",
    component: CustomLayoutComponent,
    // ...canActivate(redirectLoggedInToHome),
    children: [
      {
        path: "apps",
        children: [
          {
            path: "aio-table",
            loadChildren: () =>
              import("./pages/apps/aio-table/aio-table.module").then(
                (m) => m.AioTableModule
                ),
                ...canActivate(redirectUnauthorizedToLogin),
            },
          ],
      },
    ],
  },
  {
    path: "login",
    loadChildren: () =>
      import("./pages/pages/auth/login/login.module").then(
        (m) => m.LoginModule
      ),
  },
  {
    path: "register",
    loadChildren: () =>
      import("./pages/pages/auth/register/register.module").then(
        (m) => m.RegisterModule
      ),
  },
  {
    path: "forgot-password",
    loadChildren: () =>
      import("./pages/pages/auth/forgot-password/forgot-password.module").then(
        (m) => m.ForgotPasswordModule
      ),
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

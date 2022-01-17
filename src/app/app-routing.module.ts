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

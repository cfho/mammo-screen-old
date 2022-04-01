import { Component, Inject, LOCALE_ID, OnInit, Renderer2 } from "@angular/core";
import { ConfigService } from "../@vex/services/config.service";
import { Settings } from "luxon";
import { DOCUMENT } from "@angular/common";
import { Platform } from "@angular/cdk/platform";
import { NavigationService } from "../@vex/services/navigation.service";
import icLayers from "@iconify/icons-ic/twotone-layers";

import faceblowingakiss from "@iconify/icons-logos/homebrew";
import bellSlash from "@iconify/icons-fa-solid/bell-slash";
import icLock from '@iconify/icons-ic/twotone-lock';

import { LayoutService } from "../@vex/services/layout.service";
import { ActivatedRoute } from "@angular/router";
import { filter, map } from "rxjs/operators";
import { coerceBooleanProperty } from "@angular/cdk/coercion";
import { SplashScreenService } from "../@vex/services/splash-screen.service";
import { Style, StyleService } from "../@vex/services/style.service";
import { ConfigName } from "../@vex/interfaces/config-name.model";
import { FirebaseService } from "./firebase.service";
import { TextAst } from "@angular/compiler";
import { TextAttribute } from "@angular/compiler/src/render3/r3_ast";

@Component({
  selector: "vex-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "vex";

  constructor(
    private configService: ConfigService,
    private styleService: StyleService,
    private renderer: Renderer2,
    private platform: Platform,
    @Inject(DOCUMENT) private document: Document,
    @Inject(LOCALE_ID) private localeId: string,
    private layoutService: LayoutService,
    private route: ActivatedRoute,
    private navigationService: NavigationService,
    private splashScreenService: SplashScreenService,
    private afs: FirebaseService
  ) {
    Settings.defaultLocale = this.localeId;

    if (this.platform.BLINK) {
      this.renderer.addClass(this.document.body, "is-blink");
    }

    /* *
     * Customize the template to your needs with the ConfigService
     * Example:
     *  */
    this.configService.updateConfig({
      sidenav: {
        title: "Custom App",
        imageUrl: "//placehold.it/100x100",
        showCollapsePin: false,
      },
      footer: {
        visible: false,
      },
      navbar: {
        position: "in-toolbar",
      }
    });

    /**
     * Config Related Subscriptions
     * You can remove this if you don't need the functionality of being able to enable specific configs with queryParams
     * Example: example.com/?layout=apollo&style=default
     */
    this.route.queryParamMap
      .pipe(
        map(
          (queryParamMap) =>
            queryParamMap.has("rtl") &&
            coerceBooleanProperty(queryParamMap.get("rtl"))
        )
      )
      .subscribe((isRtl) => {
        this.document.body.dir = isRtl ? "rtl" : "ltr";
        this.configService.updateConfig({
          rtl: isRtl,
        });
      });

    this.route.queryParamMap
      .pipe(filter((queryParamMap) => queryParamMap.has("layout")))
      .subscribe((queryParamMap) =>
        this.configService.setConfig(queryParamMap.get("layout") as ConfigName)
      );

    this.route.queryParamMap
      .pipe(filter((queryParamMap) => queryParamMap.has("style")))
      .subscribe((queryParamMap) =>
        this.styleService.setStyle(queryParamMap.get("style") as Style)
      );

    this.navigationService.items = [
      // {
      //   type: 'link',
      //   label: 'Dashboard',
      //   route: '/',
      //   icon: icLayers
      // },
      {
        type: 'subheading',
        label: 'Pages',
        children: [
          {
            type: 'dropdown',
            label: 'Authentication',
            icon: icLock,
            children: [
              {
                type: 'link',
                label: 'Login',
                route: '/login'
              },
              {
                type: 'link',
                label: 'Register',
                route: '/register'
              },
              {
                type: 'link',
                label: 'Forgot Password',
                route: '/forgot-password'
              }
            ]
          },
        ]
      },
      {
        type: "subheading",
        label: "Apps",
        children: [
          {
            type: "link",
            label: "All-In-One Table",
            route: "/apps/aio-table",
            icon: bellSlash,
          },
        ],
      },
    ];
  }
}

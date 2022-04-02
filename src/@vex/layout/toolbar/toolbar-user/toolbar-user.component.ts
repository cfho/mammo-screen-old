import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { PopoverService } from '../../../components/popover/popover.service';
import { ToolbarUserDropdownComponent } from './toolbar-user-dropdown/toolbar-user-dropdown.component';
import icPerson from '@iconify/icons-ic/twotone-person';
import { AuthService } from 'src/app/auth.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'vex-toolbar-user',
  templateUrl: './toolbar-user.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarUserComponent implements OnInit, OnDestroy {

  private destroy$ = new Subject();
  dropdownOpen: boolean;
  icPerson = icPerson;
  uid: string;
  constructor(private popover: PopoverService,
              private cd: ChangeDetectorRef, 
              private authService: AuthService) {
                this.uid = authService.userDocUid
               }

  ngOnInit() {
    this.authService.getUser()
    .pipe(takeUntil(this.destroy$))
    .subscribe(data => {
      console.log(data);
    })
  }

  showPopover(originRef: HTMLElement) {
    this.dropdownOpen = true;
    this.cd.markForCheck();

    const popoverRef = this.popover.open({
      content: ToolbarUserDropdownComponent,
      origin: originRef,
      offsetY: 12,
      position: [
        {
          originX: 'center',
          originY: 'top',
          overlayX: 'center',
          overlayY: 'bottom'
        },
        {
          originX: 'end',
          originY: 'bottom',
          overlayX: 'end',
          overlayY: 'top',
        },
      ]
    });

    popoverRef.afterClosed$.subscribe(() => {
      this.dropdownOpen = false;
      this.cd.markForCheck();
    });
  }

  ngOnDestroy() {
    // when the component get's destroyed, pass something to the
    // destroy$ ReplaySubject
    this.destroy$.next(true);
    console.log("💥Destroyed");
}
}

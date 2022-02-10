import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  Input,
  OnInit,
  ViewChild,
} from "@angular/core";
import { Observable, of, ReplaySubject } from "rxjs";
import { filter, shareReplay } from "rxjs/operators";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatDialog } from "@angular/material/dialog";
import { TableColumn } from "../../../../@vex/interfaces/table-column.interface";
import {
  aioTableData,
  aioTableLabels,
} from "../../../../static-data/aio-table-data";
import { CustomerCreateUpdateComponent } from "./customer-create-update/customer-create-update.component";
import icEdit from "@iconify/icons-ic/twotone-edit";
import icDelete from "@iconify/icons-ic/twotone-delete";
import icSearch from "@iconify/icons-ic/twotone-search";
import icAdd from "@iconify/icons-ic/twotone-add";
import fileDownload from "@iconify/icons-ic/file-download";
import icFilterList from "@iconify/icons-ic/twotone-filter-list";
import { SelectionModel } from "@angular/cdk/collections";
import icMoreHoriz from "@iconify/icons-ic/twotone-more-horiz";
import icFolder from "@iconify/icons-ic/twotone-folder";
import { fadeInUp400ms } from "../../../../@vex/animations/fade-in-up.animation";
import {
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
  MatFormFieldDefaultOptions,
} from "@angular/material/form-field";
import { stagger40ms } from "../../../../@vex/animations/stagger.animation";
import { FormControl } from "@angular/forms";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { MatSelectChange } from "@angular/material/select";
import icPhone from "@iconify/icons-ic/twotone-phone";
import icMail from "@iconify/icons-ic/twotone-mail";
import icMap from "@iconify/icons-ic/twotone-map";
import { FirebaseService } from "src/app/firebase.service";
import { Customer } from "src/app/pages/apps/aio-table/interfaces/customer.model";

import { Workbook } from "exceljs";
import * as fs from "file-saver";
import { collectionSnapshots } from "@angular/fire/firestore";
import { log } from "console";
// import { saveAs } from 'file-saver';

@UntilDestroy()
@Component({
  selector: "vex-aio-table",
  templateUrl: "./aio-table.component.html",
  styleUrls: ["./aio-table.component.scss"],
  animations: [fadeInUp400ms, stagger40ms],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        appearance: "standard",
      } as MatFormFieldDefaultOptions,
    },
  ],
})
export class AioTableComponent implements OnInit, AfterViewInit {
  layoutCtrl = new FormControl("fullwidth");

  /**
   * Simulating a service with HTTP that returns Observables
   * You probably want to remove this and do all requests in a service with HTTP
   */
  subject$: ReplaySubject<Customer[]> = new ReplaySubject<Customer[]>(1);
  data$: Observable<Customer[]> = this.subject$.asObservable();
  customers: Customer[];
  isRead = false;

  @Input()
  columns: TableColumn<Customer>[] = [
    {
      label: "Checkbox",
      property: "checkbox",
      type: "checkbox",
      visible: true,
    },
    // { label: 'Image', property: 'image', type: 'image', visible: true },
    {
      label: "姓名",
      property: "_003name",
      type: "text",
      visible: true,
      cssClasses: ["font-medium"],
    },
    {
      label: "身份證",
      property: "_001ID_number",
      type: "text",
      visible: false,
      cssClasses: ["font-medium"],
    },
    // { label: 'First Name', property: 'firstName', type: 'text', visible: false },
    // { label: 'Last Name', property: 'lastName', type: 'text', visible: false },
    // { label: "Contact", property: "contact", type: "button", visible: true },
    {
      label: "現居地",
      property: "_006current_residence",
      type: "text",
      visible: true,
      cssClasses: ["text-secondary", "font-medium"],
    },
    // { label: 'Street', property: 'street', type: 'text', visible: false, cssClasses: ['text-secondary', 'font-medium'] },
    // { label: 'Zipcode', property: 'zipcode', type: 'text', visible: false, cssClasses: ['text-secondary', 'font-medium'] },
    {
      label: "已確認",
      property: "readCheckbox",
      type: "check",
      visible: true,
      // cssClasses: ["text-secondary", "font-medium"],
    },
    {
      label: "病歷號",
      property: "_016hx_number",
      type: "text",
      visible: false,
      cssClasses: ["text-secondary", "font-medium"],
    },
    {
      label: "報告醫師",
      property: "drName",
      type: "text",
      visible: true,
      cssClasses: ["text-secondary", "font-medium"],
    },
    {
      label: "流水號",
      property: "accessionNumber",
      type: "text",
      visible: true,
      cssClasses: ["text-secondary", "font-medium"],
    },
    {
      label: "手機",
      property: "_010mobile",
      type: "text",
      visible: false,
      cssClasses: ["text-secondary", "font-medium"],
    },
    // { label: "Labels", property: "labels", type: "button", visible: true },
    // { label: "Actions", property: "actions", type: "button", visible: true },
  ];
  pageSize = 100;
  pageSizeOptions: number[] = [100, 200, 300];
  dataSource: MatTableDataSource<Customer> | null;
  selection = new SelectionModel<Customer>(true, []);
  searchCtrl = new FormControl();

  labels = aioTableLabels;

  icPhone = icPhone;
  icMail = icMail;
  icMap = icMap;
  icEdit = icEdit;
  icSearch = icSearch;
  icDelete = icDelete;
  icAdd = icAdd;
  icFilterList = icFilterList;
  icMoreHoriz = icMoreHoriz;
  icFolder = icFolder;
  fileDownload = fileDownload;

  clickedRows = new Set();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private dialog: MatDialog, private afService: FirebaseService) {}

  get visibleColumns() {
    return this.columns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }

  /**
   * Example on how to get data and pass it to the table - usually you would want a dedicated service with a HTTP request for this
   * We are simulating this request here.
   */

  exportExcel(customers: Customer[]) {
    let contact: string = this.afService.contactString;

    //取得匯出的資料：Object
    const exportKeyArr = this.afService.exportFieldsKeyArr;
    const savedData = customers;
    const exportArr = [];
    savedData.map((dataArr) => {
      const newObj = {};
      exportKeyArr.forEach((key) => {
        if (savedData[0][key]) newObj[key] = dataArr[key];
      });
      exportArr.push(newObj);
    });

    //將資料 Object 轉成 string
    const stringArr = [...exportArr.map((obj) => [...Object.values(obj)])]
      .map((e) => e.join(""))
    stringArr.unshift(contact);
    const exportString = stringArr.join("\n");

    // 儲存檔案的名稱：BreastA1231050017_11102
    const month = (new Date().getUTCMonth() + 1).toString().padStart(2, "0");
    const year = new Date().getUTCFullYear() - 1911;
    const fileName = "BreastA1231050017_" + year + month + ".txt";

    //存儲檔案
    const blob = new Blob([exportString], {type: "text/plain;charset=utf-8"});
      fs.saveAs(blob, fileName);
  }

  exportAll() {
    this.exportExcel(this.customers);
  }



  getData() {
    // return of(aioTableData.map(customer => new Customer(customer)));
    return this.afService.getAllItems();
  }

  ngOnInit() {
    // this.afService.getFields().subscribe(console.log);
    this.getData().subscribe((customers) => {
      this.subject$.next(customers);
    });

    this.dataSource = new MatTableDataSource();

    this.data$
      .pipe(
        filter<Customer[]>(Boolean)
        // shareReplay(1)
      )
      .subscribe((customers) => {
        this.customers = customers;
        console.log(customers);
        this.dataSource.data = customers;
      });

    this.searchCtrl.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe((value) => this.onFilterChange(value));
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  createCustomer() {
    this.dialog
      .open(CustomerCreateUpdateComponent)
      .afterClosed()
      .subscribe((customer: Customer) => {
        /**
         * Customer is the updated customer (if the user pressed Save - otherwise it's null)
         */
        if (customer) {
          /**
           * Here we are updating our local array.
           * You would probably make an HTTP request here.
           */
          this.customers.unshift(new Customer(customer));
          this.subject$.next(this.customers);
        }
      });
  }

  updateCustomer(customer: Customer) {
    // console.log(customer.readCheckbox);
    // if(customer.readCheckbox) {
    //   console.log('has data');
    //   customer.readCheckbox = !customer.readCheckbox;
    // } else {
    //   console.log('no data')
    //   customer.readCheckbox = true;
    // }
    // customer.readCheckbox = true;

    this.dialog
      .open(CustomerCreateUpdateComponent, {
        data: customer,
      })
      .afterClosed()
      .subscribe((updatedCustomer) => {
        /**
         * Customer is the updated customer (if the user pressed Save - otherwise it's null)
         */
        if (updatedCustomer) {
          /**
           * Here we are updating our local array.
           * You would probably make an HTTP request here.
           */
          // const index = this.customers.findIndex((existingCustomer) => existingCustomer.id === updatedCustomer.id);
          // this.customers[index] = new Customer(updatedCustomer);
          // this.subject$.next(this.customers);
          this.afService.updateItem(updatedCustomer);
        }
      });
  }

  deleteCustomer(customer: Customer) {
    /**
     * Here we are updating our local array.
     * You would probably make an HTTP request here.
     */

    // this.customers.splice(
    //   this.customers.findIndex(
    //     (existingCustomer) => existingCustomer.id === customer.id
    //   ),
    //   1
    // );
    // this.selection.deselect(customer);
    // this.subject$.next(this.customers);
    this.afService.deleteItem(customer);

  }

  deleteCustomers(customers: Customer[]) {
    /**
     * Here we are updating our local array.
     * You would probably make an HTTP request here.
     */
    customers.forEach((c) => this.deleteCustomer(c));
  }

  onFilterChange(value: string) {
    if (!this.dataSource) {
      return;
    }
    value = value.trim();
    value = value.toLowerCase();
    this.dataSource.filter = value;
  }

  toggleColumnVisibility(column, event) {
    event.stopPropagation();
    event.stopImmediatePropagation();
    column.visible = !column.visible;
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }

  trackByProperty<T>(index: number, column: TableColumn<T>) {
    return column.property;
  }

  onLabelChange(change: MatSelectChange, row: Customer) {
    const index = this.customers.findIndex((c) => c === row);
    this.customers[index].labels = change.value;
    this.subject$.next(this.customers);
  }
}

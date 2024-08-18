import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { Rebanho } from '../../../core/models/rebanho';
import { RebanhosService } from '../../../core/services/rebanhos.service';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-todos-rebanhos',
  standalone: true,
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule
  ],
  templateUrl: './todos-rebanhos.component.html',
  styleUrl: './todos-rebanhos.component.css',
})
export class TodosRebanhosComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'nomeRebanho', 'descriRebanho', 'opcoes'];
  dataSource = new MatTableDataSource<Rebanho>();
  totalElements = 0;
  page = 0;
  pageSize = 10;
  sortBy = 'id';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private rebanhos: RebanhosService,
    private _liveAnnouncer: LiveAnnouncer
  ) {}

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getRebanhos(0, this.pageSize);
  }

  getRebanhos(pageIndex: number, pageSize: number): void {
    this.rebanhos.verTodosRebanhos(pageIndex, pageSize, this.sortBy).subscribe({
      next: (rebanhos) => (
        (this.dataSource.data = rebanhos.content),
        (this.totalElements = rebanhos.totalElements),
        (this.paginator.pageIndex = pageIndex ? pageIndex : 0),
        console.log('rebanhos : ', rebanhos.content),
        console.log('this.dataSource.data : ', this.dataSource.data),
        console.log('rebanhos.totalElements : ', rebanhos.totalElements),
        console.log('pageIndex : ', pageIndex)
      ),
    });
  }

  onPageChange(event: any): void {
    this.getRebanhos(event.pageIndex, event.pageSize);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  /* announceSortChange(sortState: Sort){
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce(`Sorting cleared`);
    }
  } */
}

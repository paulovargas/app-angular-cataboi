import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, viewChild, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Propriedade } from '../../../core/models/propriedade';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { PropriedadesService } from '../../../core/services/propriedades.service';
import {MatIconModule} from '@angular/material/icon';
import { RouterLink } from '@angular/router';

//const PROPRIEDADE_DATA: Propriedade[] = [];

@Component({
  selector: 'app-todas-propriedades',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    RouterLink
  ],
  templateUrl: './todas-propriedades.component.html',
  styleUrl: './todas-propriedades.component.css'
})
export class TodasPropriedadesComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'nomePropriedade', 'localidade', 'opcoes'];
  dataSource = new MatTableDataSource<Propriedade>();
  totalElements = 0;
  page = 0;
  pageSize = 10;
  sortBy = 'id';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    private propriedades: PropriedadesService
  ) {}

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getPropriedades(0, this.pageSize);
  }

  testeOp(): void {}

  getPropriedades(pageIndex: number, pageSize: number): void {
    this.propriedades.verTodasPropriedades(pageIndex, pageSize, this.sortBy).subscribe({
      next: propriedades => (
        this.dataSource.data = propriedades.content,
        this.totalElements = propriedades.totalElements,
        this.paginator.pageIndex = pageIndex,
        console.log("Propriedades : ", propriedades.content),
        console.log("propriedades.totalElements : ", propriedades.totalElements),
        console.log("pageIndex : ", pageIndex)
      ),
    });
  }

  onPageChange(event: any): void {
    this.getPropriedades(event.pageIndex, event.pageSize);
  }

  ngAfterViewInit(): void {
      this.dataSource.sort = this.sort;
  }



  announceSortChange(sortState: Sort){
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce(`Sorting cleared`);
    }
  }
}

import { CommonModule } from '@angular/common';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { Animal } from '../../../core/models/animal';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AnimaisService } from '../../../core/services/animais.service';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-todos-animais',
  standalone: true,
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule
  ],
  templateUrl: './todos-animais.component.html',
  styleUrl: './todos-animais.component.css'
})

export class TodosAnimaisComponent implements AfterViewInit {
  displayedColumns: string[] = ['numeroBrincos', 'descricao', 'nomeRebanho', 'propriedade', 'status', 'pelagem', 'opcoes'];
  dataSource = new MatTableDataSource<Animal>();
  totalElements = 0;
  page = 0;
  pageSize = 10;
  sortBy = 'id';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private animais: AnimaisService,
    private _liveAnnouncer: LiveAnnouncer
  ) {}

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getAnimais(0, this.pageSize);
  }

  getAnimais(pageIndex: number, pageSize: number): void {
    this.animais.verTodosAnimais(pageIndex, pageSize, this.sortBy).subscribe({
      next: animais => (
        this.dataSource.data = animais.content,
        this.totalElements = animais.totalElements,
        this.paginator.pageIndex = pageIndex,
        console.log("Animais : ", animais.content),
        console.log("animais.totalElements : ", animais.totalElements),
        console.log("pageIndex : ", pageIndex)
      ),
    });
  }

  onPageChange(event: any): void {
    this.getAnimais(event.pageIndex, event.pageSize);
  }

  ngAfterViewInit() {
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

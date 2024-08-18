import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Evento } from '../../../core/models/evento';
import { EventosService } from '../../../core/services/eventos.service';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-todos-eventos',
  standalone: true,
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule
  ],
  templateUrl: './todos-eventos.component.html',/* idevenR: number;
  rebanho: any;
  animal: any;
  eventoGrupo: string;
  nome: string;
  local: string;
  dataEvento: string;
  descri: string;
  obser: string; */
  styleUrl: './todos-eventos.component.css'
})
export class TodosEventosComponent implements AfterViewInit {
  displayedColumns: string[] = ['idevenR', 'nomeRebanho', 'nome', 'local', 'dataEvento', 'descri', 'opcoes'];
  dataSource = new MatTableDataSource<Evento>();
  totalElements = 0;
  page = 0;
  pageSize = 10;
  sortBy = 'id';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private eventos: EventosService,
    private _liveAnnouncer: LiveAnnouncer
  ) {}

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getEventos(0, this.pageSize);
  }

  getEventos(pageIndex: number, pageSize: number): void {
    this.eventos.verTodosEventos(pageIndex, pageSize, this.sortBy).subscribe({
      next: eventos => (
        this.dataSource.data = eventos.content,
        this.totalElements = eventos.totalElements,
        this.paginator.pageIndex = pageIndex,
        console.log("Eventos : ", eventos.content),
        console.log("Eventos.totalElements : ", eventos.totalElements),
        console.log("pageIndex : ", pageIndex)
      ),
    });
  }

  onPageChange(event: any): void {
    this.getEventos(event.pageIndex, event.pageSize);
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

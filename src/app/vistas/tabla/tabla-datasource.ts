import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface TablaItem {
  name: string;
  id: number;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: TablaItem[] = [
  { id: 1, name: 'Procesador Intel Core i9-9900K' },
  { id: 2, name: 'Tarjeta Gráfica NVIDIA GeForce RTX 3080' },
  { id: 3, name: 'Memoria RAM Corsair Vengeance LPX 16GB DDR4' },
  { id: 4, name: 'SSD Samsung 970 EVO Plus 1TB' },
  { id: 5, name: 'Placa Base ASUS ROG Strix B550-F Gaming' },
  { id: 6, name: 'Fuente de Alimentación EVGA SuperNOVA 750 G3' },
  { id: 7, name: 'Refrigeración Líquida Corsair H100i RGB Platinum SE' },
  { id: 8, name: 'Tarjeta de Sonido Creative Sound Blaster Z' },
  { id: 9, name: 'Monitor ASUS ROG Swift PG279Q 27" QHD' },
  { id: 10, name: 'Teclado Mecánico Corsair K95 RGB Platinum XT' },
  { id: 11, name: 'Ratón Logitech G Pro X Superlight' },
  { id: 12, name: 'Caja NZXT H510i ATX Mid Tower' },
  { id: 13, name: 'Ventiladores RGB NZXT Aer P120' },
  { id: 14, name: 'Tarjeta de Red TP-Link Archer T6E AC1300' },
  { id: 15, name: 'Webcam Logitech C920 HD Pro' },
  { id: 16, name: 'Auriculares HyperX Cloud II' },
  { id: 17, name: 'Silla Gaming Respawn 110' },
  { id: 18, name: 'Alfombrilla de Ratón SteelSeries QcK Prism RGB' },
  { id: 19, name: 'Impresora Brother HL-L2380DW' },
  { id: 20, name: 'Router ASUS RT-AX88U AX6000 Dual Band' }
];

/**
 * Data source for the Tabla view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TablaDataSource extends DataSource<TablaItem> {
  data: TablaItem[] = EXAMPLE_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<TablaItem[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: TablaItem[]): TablaItem[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: TablaItem[]): TablaItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

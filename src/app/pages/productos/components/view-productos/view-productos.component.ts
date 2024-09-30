import { Component, Input, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Productos } from '../../models/productos';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-view-productos',
  standalone: true,
  imports:[TagModule],
  templateUrl: './view-productos.component.html',
  styleUrls: ['./view-productos.component.css']
})
export class ViewProductosComponent implements OnInit {

  dataProduct: Productos;

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig

  ) { }

  ngOnInit() {
    this.saveView();
  }

  saveView(){
    this.dataProduct = this.config.data;
  }

}

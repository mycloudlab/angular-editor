import { Component, OnInit, Input, Output } from '@angular/core';

import { MatTreeNestedDataSource } from '@angular/material/tree';
import { NestedTreeControl } from '@angular/cdk/tree';
import { TreeComponent } from '../model/component';

@Component({
  selector: 'tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent implements OnInit {

  _page: any;

  get page(): any {
    return this._page;
  }

  @Input("page")
  set page(val: any) {
    this._page = val;
    this.dataSource.data = val.components;
  }

  @Output()
  selectedComponent: TreeComponent;

  treeControl = new NestedTreeControl<TreeComponent>(node => node.children);
  dataSource = new MatTreeNestedDataSource<TreeComponent>();


  constructor() { }

  ngOnInit() {
  }

  hasChild = (_: number, node: TreeComponent) => !!node.children && node.children.length > 0;


  select(component) {
    this.selectedComponent = component;
  }

  isSelected(component) {
    return this.selectedComponent == component;
  }

}

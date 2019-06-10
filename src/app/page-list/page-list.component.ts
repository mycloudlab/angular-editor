import { Component, OnInit, Input, Output, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';

@Component({
  selector: 'page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {


  @Input("pages")
  pages;


  @Output("selectedPage")
  selectedPage;

  @ViewChild(MatMenuTrigger, { static: false })
  contextMenu: MatMenuTrigger;

  contextMenuPosition = { x: '0px', y: '0px' };

  pageEditing;

  constructor() {
  }

  onContextMenu(event: MouseEvent, item) {
    event.preventDefault();
    this.contextMenuPosition.x = event.clientX + 'px';
    this.contextMenuPosition.y = event.clientY + 'px';
    this.contextMenu.menuData = { 'item': item };
    this.contextMenu.openMenu();
  }

  ngOnInit() {
    this.selectedPage = this.pages[0];
  }

  enableEdit(page) {
    this.pageEditing = page;
  }

  isEditing(page) {
    return this.pageEditing == page;
  }

  disableEdit() {
    this.pageEditing = null;
  }



  select(page) {
    this.selectedPage = page;
  }

  isSelected(page) {
    return page == this.selectedPage;
  }

  newPage() {
    this.pages.push({ name: "new Page" });
  }

  remove(page) {
    this.pages.splice(this.pages.indexOf(page), 1);
  }

}

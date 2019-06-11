import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ComponentPropertiesComponent } from './component-properties/component-properties.component';
import { ComponentEventsComponent } from './component-events/component-events.component';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { ComponentPaletteComponent } from './component-palette/component-palette.component';
import { ViewEditorComponent } from './view-editor/view-editor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



// material design
import {MatGridListModule,  MatMenu, MatMenuModule, MatButtonModule, MatIconModule, MatInputModule, MatTreeModule} from '@angular/material';
import { PageListComponent } from './page-list/page-list.component';
import { FormsModule } from '@angular/forms';

import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    ComponentPropertiesComponent,
    ComponentEventsComponent,
    TreeViewComponent,
    ComponentPaletteComponent,
    ViewEditorComponent,
    PageListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    MatTreeModule,
    DragDropModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'component-properties',
  templateUrl: './component-properties.component.html',
  styleUrls: ['./component-properties.component.css']
})
export class ComponentPropertiesComponent implements OnInit {

  @Input("components")
  components;

  @Input("selectedComponent")
  selectedComponent;


  constructor() { }

  ngOnInit() {
  }

}

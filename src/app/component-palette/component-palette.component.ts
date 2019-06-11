import { Component, OnInit, Input} from '@angular/core';



@Component({
  selector: 'component-palette',
  templateUrl: './component-palette.component.html',
  styleUrls: ['./component-palette.component.css']
})
export class ComponentPaletteComponent implements OnInit {


  @Input()
  libraries:any;

  constructor() { }

  ngOnInit() {
  }

}

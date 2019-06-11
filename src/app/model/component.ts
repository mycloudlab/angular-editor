export interface TreeComponent {
    library: string;
    component: string;
    children?: TreeComponent[];
  }
  


  
  export class TreeComponentFlatNode {
    item: string;
    level: number;
    expandable: boolean;
  }
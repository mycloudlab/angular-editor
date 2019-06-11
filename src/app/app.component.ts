import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  pages = [ 
    {
      name: "pagina 1",
      components: [
        {
          library: 'material-angular-design-system:3.2.1',
          component: 'container',
          children: [
            {
              library: 'material-angular-design-system:3.2.1',
              component: 'button',
              children: [
                {
                  library: 'material-angular-design-system:3.2.1',
                  component: 'button',
                }
              ]
            },
            {
              library: 'material-angular-design-system:3.2.1',
              component: 'button',
              children: [
                {
                  library: 'material-angular-design-system:3.2.1',
                  component: 'button',
                }
              ]
            },
            {
              library: 'material-angular-design-system:3.2.1',
              component: 'button',
              children: [
                {
                  library: 'material-angular-design-system:3.2.1',
                  component: 'button',
                }
              ]
            }
          ]
        },
        {
          library: 'material-angular-design-system:3.2.1',
          component: 'button',
          children: [
            {
              library: 'material-angular-design-system:3.2.1',
              component: 'button',
            }
          ]
        },
        {
          library: 'material-angular-design-system:3.2.1',
          component: 'button',
          children: [
            {
              library: 'material-angular-design-system:3.2.1',
              component: 'button',
            }
          ]
        },
        {
          library: 'material-angular-design-system:3.2.1',
          component: 'button',
          children: [
            {
              library: 'material-angular-design-system:3.2.1',
              component: 'button',
            }
          ]
        },
      ]
    },
    {
      name: "Login",
      components: [
        {
          library: 'material-angular-design-system:3.2.1',
          component: 'button',
        }
      ]
    },
    {
      name: "cadastro",
      components: [
        {
          library: 'material-angular-design-system:3.2.1',
          component: 'button',
        }
      ]
    }

  ];




  libraries = [
    {
      name: "Material Angular Design System",
      library: 'material-angular-design-system:3.2.1',
      componentGroups: [
        {
          name: 'Layout',
          components: [
            {
              component: 'mat-card',
              name: 'Card',
              description: "Simple card",
              url: 'https://material.angular.io/components/card/overview',
              template: "<mat-button></mat-button>",
            },
            {
              component: 'mat-card-header',
              name: 'Card Header',
              description: "Card header",
              url: 'https://material.angular.io/components/card/overview',
              template: "<mat-button></mat-button>",
            },
            {
              component: 'mat-card-title',
              name: 'Card Title',
              description: "Card Title",
              url: 'https://material.angular.io/components/card/overview',
              template: "<mat-button></mat-button>",
            },
            {
              component: 'mat-card-subtitle',
              name: 'Card Subtitle',
              description: "Card subtitle",
              url: 'https://material.angular.io/components/card/overview',
              template: "<mat-button></mat-button>",
            },
            {
              component: 'mat-card-content',
              name: 'Card Content',
              description: "Card Content",
              url: 'https://material.angular.io/components/card/overview',
              template: "<mat-button></mat-button>",
            },
            {
              component: 'mat-card-image',
              name: 'Card image',
              description: "Card image",
              url: 'https://material.angular.io/components/card/overview',
              template: "<mat-button></mat-button>",
            },
            {
              component: 'mat-card-actions',
              name: 'Card Actions',
              description: "Card Actions",
              url: 'https://material.angular.io/components/card/overview',
              template: "<mat-button></mat-button>",
            },
          ]
        },
        {
          name: 'Form controls',
          components: [
            {
              component: 'button',
              name: 'Button',
              description: "material button",
              template: "<mat-button></mat-button>",
              properties: [
                {
                  name: 'color',
                  type: 'colorpicker'
                }
              ],
              events: [
                {
                  name: 'click',
                  description: 'handle click event',
                }
              ]
            }
          ]
        }
      ]
    }
  ]

}

import { Component, ElementRef, Type } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1><p>In angular world and we see this page is {{page}}</p>`
})
export class AppComponent {
  name = 'Angular';
  page: string;

  constructor(elm: ElementRef) {
    this.page = elm.nativeElement.attributes["page"].value;

    // dynamically load component based on name to load page content
    /*
    var factories = Array.from(this.resolver['_factories'].keys());
    var factoryClass = <Type<any>>factories.find((x: any) => x.name === this.comp);
    const factory = this.resolver.resolveComponentFactory(factoryClass);
    const compRef = this.vcRef.createComponent(factory);
    */
    // above code belongs in its own service. Since this is the main bootstrapped component, this will be responsible for
    //  grabbing the page name and loading the correct component, using the aforementioned service.
    // There's a plunker here demonstrating that http://plnkr.co/edit/AhUmUZwNIqnM0EraDVVB?p=preview
    // there's also this similar way, but cleaner service API http://stackoverflow.com/a/38467952/2378943
  }

}

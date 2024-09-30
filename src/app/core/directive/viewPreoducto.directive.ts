import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appViewPreoducto]',
  standalone: true,
})
export class ViewPreoductoDirective {

  @HostListener('click', ['$event'])
  handleClick(event: Event): void {
    console.log('Elemento visto:', event);
  }

}

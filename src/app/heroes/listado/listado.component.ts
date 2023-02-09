import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent{

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitán América'];
  ultimoHeroeBorrado: string = ''; 

  borrarHeroe = (): void => {
    this.ultimoHeroeBorrado = this.heroes.pop() || '';
     
  }

  seBorroHeroe = (): boolean => {
      return this.ultimoHeroeBorrado != '';
  }
}

import { PokemonService } from './../../services/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss'],
})
export class PokemonDetailComponent implements OnInit {
  pokemon: any = '';
  pokemonType = [];
  pokemonImg = '';

  constructor(
    private pokemonService: PokemonService,
    private activatedRouter: ActivatedRoute
  ) {
    this.activatedRouter.params.subscribe((params) => {
      this.getPokemon(params[`id`]);
    });
  }

  ngOnInit(): void {}

  getPokemon(id): any {
    this.pokemonService.getPokemons(id).subscribe(
      (res) => {
        this.pokemon = res;
        this.pokemonImg = this.pokemon.sprites.front_default;
        this.pokemonType = res.types[0].type.name;
      },
      (erro) => {
        console.log(erro);
      }
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { ProblemasApiService } from 'src/app/services/problemas-api.service';
import { ProblemasRegioesApiModel } from 'src/app/services/problemas-regioes-api-model';
import { RegioesApiModel } from 'src/app/services/regioes-api-model';
import { RegioesApiService } from 'src/app/services/regioes-api.service';

@Component({
  selector: 'app-panorama-page',
  templateUrl: './panorama-page.component.html',
  styleUrls: ['./panorama-page.component.css']
})
export class PanoramaPageComponent implements OnInit {

  listaRegioes: RegioesApiModel [] = [];


  constructor(public RegioesApi: RegioesApiService) { }

  ngOnInit(): void {
    this.RegioesApi.get().subscribe({
      next: (retornoDaApi) => {
        this.listaRegioes = retornoDaApi;
      }
    });
​
  }

}

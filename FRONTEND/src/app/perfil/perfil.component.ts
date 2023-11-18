import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit{

    data: any=[];
    tecnologias: any = [];
    interes:any=[];

    constructor(private apiService: ApiService) {

    }

    ngOnInit() {
      this.rellenoDatos();
    }

    rellenoDatos() {
      this.apiService.getProfile().subscribe((data) => {
        this.data = data;
        // console.log(this.data);
        this.tecnologias = this.data[0].tecnologias;
        this.interes = this.data[0].interes;
        // console.log(this.tecnologias[0]);
        console.log(this.interes);
      });
    }

}

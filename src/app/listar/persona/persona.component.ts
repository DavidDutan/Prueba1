import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { persona } from 'src/app/domain/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent implements OnInit {
  title = "Listar persona"
  persona: any;


  constructor(
    private router: Router,
    private personas: PersonaService)
   { 

  }

 
  ngOnInit(): void {
    this.loadPoducts()
    
  }

  loadPoducts(){
    this.persona= this.personas.getlistarFire();

    console.log(this.personas)
  
  }

}

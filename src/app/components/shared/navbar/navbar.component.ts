import { Component, OnInit } from '@angular/core';
import {ApiService} from "../services/api.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  crearToken(){
    this.api.getToken().subscribe(res=>{
      console.log(res)
      this.api.toLocalStorage(res);
    })
  }

}

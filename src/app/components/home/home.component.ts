import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  songs : any[] = [];
  pag: any;
  constructor(private data: ApiService) { }

  ngOnInit(): void {
    this.getData()
  }

  getData(url?: string){
    this.data.getNewReleases(url).subscribe((res:any)=>{
      this.songs = res['albums']['items'];
      this.pag = res['albums'];
      console.log("imprimiendo la info completa",res['albums'])
      console.log("imprimiendo los items", res['albums']['items'])
      console.log("imprimiendo los albums", res['albums'])
    })
  }

  nextPage(){
    console.log("click")
    this.getData(this.pag.next)
  }

  previousPage(){
    this.getData(this.pag['previous'])
  }
}

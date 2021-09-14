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
  constructor(private data: ApiService) { }

  ngOnInit(): void {
    this.data.getNewReleases().subscribe((res:any)=>{
      this.songs = res['albums']['items'];
      console.log(res)
    })
  }

}

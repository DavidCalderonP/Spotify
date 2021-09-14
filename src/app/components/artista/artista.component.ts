import {AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../shared/services/api.service";
import {Artista} from "../../artista.model";



@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit, AfterViewInit, OnDestroy
{

  artista: Artista;

  constructor(private activatedRoute: ActivatedRoute, private data: ApiService, private cdr: ChangeDetectorRef) {
    console.log("constructor")
    this.artista = new Artista();
    //this.artista.genres = [];
    this.artista.init();
    this.activatedRoute.params.subscribe(res=>{
      //console.log(res)
      this.data.getOneArtist(res.id).subscribe( (artista:any)=>{
        this.artista = artista;
        this.cdr.detectChanges()
        //console.log(artista)
      })
      this.data.getTopTracks(res.id).subscribe(res=>{
        console.log(res);
      });
    })


  }

  getFollowers = () => {
    //console.log(this.artista, this.artista.followers)
    return this.artista.followers ? this.artista.followers.total : '99999';
  }

  ngOnInit(): void {
    console.log("oninit")
  }

  ngAfterViewInit(): void {
    console.log("onafter")
  }

  ngOnDestroy(): void {
    console.log("ondestroy")

  }

}

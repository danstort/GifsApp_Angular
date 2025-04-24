import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@environments/environment';

@Injectable({providedIn: 'root'})
export class GifService {
    
    private http = inject(HttpClient);

    loadTrendingGifs() {

        this.http.get(`${ environment.giphyUrl}/gifs/trending`);

    }
    
}
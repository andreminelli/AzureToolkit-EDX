import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { AzureHttpClient } from './azureHttpClient';
import { BingSearchResponse } from '../models/bingSearchResponse';
@Injectable()
export class CognitiveService {
    bingSearchAPIKey = '58ef7674237a4b929571f7636db6f5c0';
    constructor(private http: AzureHttpClient) { }
    searchImages(searchTerm: string): Observable<BingSearchResponse> {
        return this.http.get(`https://api.cognitive.microsoft.com/bing/v7.0/images/search?q=${searchTerm}`, this.bingSearchAPIKey)
            .map(response => response.json() as BingSearchResponse)
            .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
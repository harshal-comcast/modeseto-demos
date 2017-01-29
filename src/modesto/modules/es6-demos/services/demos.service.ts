import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

// import 'rxjs/';

@Injectable()
export class ES6DemoService {

    private http: Http;

    constructor(http: Http) {
        this.http = http;
    }

    public getTemplates(partial: string) {
        return this.http.get(`/data/views/es6/${partial}.html`)
            .map( res => { return res["_body"]; });
    }

}
import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";

@Component({
    selector: 'app-form-component',
    templateUrl: './form-component.component.html',
    styleUrls: ['./form-component.component.css']
})

export class FormComponentComponent {
    personId:any;
    post:any;
    constructor(
        private http: HttpClient
    ){

    }

    submit(data: any){
        this.http.post('/api/person/', data)
        .subscribe((result:any)=>{
            this.personId = result.id;
            console.warn("result is ", result)
        })
    }
    viewMessage(){
        this.http.get('/api/person/' + this.personId)
        .subscribe((result)=>{
            this.post = result;
            console.warn("result is ", result)
        })
    }
}
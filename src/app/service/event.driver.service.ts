import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { ActionEvent } from "../model/product.model";

@Injectable({providedIn:'root'})
export class EventDriverService{

    sourceEvenSubject:Subject<ActionEvent>= new Subject<ActionEvent> ();
    sourceEvenSubjectObservable= this.sourceEvenSubject.asObservable();


    publishEvent(event: ActionEvent){
        this.sourceEvenSubject.next(event);
    }
}
import { HttpClient } from '@angular/common/http';
import {Injectable}from '@angular/core'
import { environment } from 'src/environments/environment';
import{Observable} from 'rxjs'
import { Product } from '../model/product.model';
import { AppDataState } from '../state/product.state';

@Injectable({providedIn:"root"})
export class ProductService{

    constructor(private http:HttpClient){
    }

    getAllProducts():Observable<AppDataState<Product[]>>{
        let host= environment.host; 
       return this.http.get<AppDataState<Product[]>>(host+'/products');
    }

    getSelectedProducts():Observable<Product[]>{
        let host= environment.host;
       return this.http.get<Product[]>(host+'/products?selected=true');
    }
    getAvailableProducts():Observable<Product[]>{
        let host= environment.host;
       return this.http.get<Product[]>(host+'/products?available=true');
    }

    getSeached(key:string):Observable<Product[]>{
        let host= environment.host;
       return this.http.get<Product[]>(host+'/products?name_like='+key);
    }

    getProduct(id:number):Observable<Product>{
        let host= environment.host;
       return this.http.get<Product>(host+'/products/'+id);
    }

    changeSelectStatus(p:Product):Observable<Product>{
        let host= environment.host;
        p.selected = !p.selected;
        return this.http.put<Product>(host+'/products/'+p.id,p);
    }

    updateProduct(p:Product):Observable<Product>{
        let host= environment.host;
        return this.http.put<Product>(host+'/products/'+p.id,p);
    }

    deleteProduct(id:number): Observable<void>{
        let host= environment.host;
     return this.http.delete<void>(host+'/products/'+id);
    }

    addProduct(p:{name:string, price:number,quantity:number, available:boolean, selected:boolean}): Observable<Product>{
        console.log(p)
        let host = environment.host;
     return this.http.post<Product>(host+'/products/',p);
    }

    editProduct(p:Product): Observable<Product>{
        let host = environment.host;
     
        return this.http.put<Product>(host+'/products/'+p.id,p);
    }
}
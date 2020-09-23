import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
 public url="http://jsonplaceholder.typicode.com/photos?_start=0&_limit=5";


  constructor(private http:HttpClient) { }
  
  
  
  public TakingData():Observable<any>{
    return this.http.get(this.url)
  }
 
}

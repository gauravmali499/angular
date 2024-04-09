import { Component } from '@angular/core';
import { userdata } from '../Model/userData';
import { HttpServiceService } from './services/http-service.service';

@Component({
  selector: 'app-http-request',
  standalone: true,
  imports: [],
  templateUrl: './http-request.component.html',
  styleUrl: './http-request.component.css'
})
export class HttpRequestComponent {
  userData:userdata[] = [];
  dataService: any;

  constructor(private httpService:HttpServiceService){}

  ngOnInit(): void {
    //Get Data
    this.httpService.getData().subscribe(
      (result:userdata[])=>this.userData = result
    )
    setTimeout(() => {
      console.log(this.userData);   
    }, 1000);

    // Post data
  //   this.dataService.postData(this.postData as userdata).subscribe((data)=>{ this.userData.push(data) })

  //   setTimeout(() => {
  //   this.dataService.getData().subscribe(
  //     (result:userdata[])=>{
  //       this.userData = result
  //     }
  //   )
  //     console.log(this.userData);
      
  //   }, 1000);  
  // }
  }
}

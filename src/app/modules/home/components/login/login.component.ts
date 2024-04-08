import { Component, OnInit } from '@angular/core';
import { userdata } from '../../../../Model/userData';
import { UserDataService } from '../../../../services/user-data.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  userData:userdata[] = []
  postData:userdata = {
    name: "Tenali", gender: "female", email: "tenali.raregvresgmakrishna@15ce.com", status: "inactive",
    id:21212122
  }
  constructor(private dataService: UserDataService) {
    
  }
  ngOnInit(): void {

    // Get Data
    // this.dataService.getData().subscribe(
    //   (result:userdata[])=>this.userData = result
    // )
    // setTimeout(() => {
    //   console.log(this.userData);
      
    // }, 1000);

    // Post data
    this.dataService.postData(this.postData as userdata).subscribe((data)=>{ this.userData.push(data) })

    setTimeout(() => {
    this.dataService.getData().subscribe(
      (result:userdata[])=>{
        this.userData = result
      }
    )
      console.log(this.userData);
      
    }, 1000);  
  }
}

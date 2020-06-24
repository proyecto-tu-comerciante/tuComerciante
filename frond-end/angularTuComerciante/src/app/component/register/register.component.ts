import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  response:any;
  constructor(
    private _apihttp:ApiService,

  ) { }

  ngOnInit(): void {
  }

  onSubmit(data){
    console.log(data);
    this._apihttp.post(data).subscribe((result:any)=>{
      const {Status} = result
      this.response = Status
    })


  }
}

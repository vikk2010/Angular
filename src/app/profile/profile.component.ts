import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  btnColor:string = '';
  btnText:string = '';
  color:string[] = ['red','green','blue','orange'];
  text:string[] = ['apply', 'Login', 'SignIn', 'SignUp', 'Submit'];

  constructor() {
    
    setInterval(()=>{
      this.btnText = this.text[Math.floor(Math.random() * this.text.length)]
      this.btnColor = "btn " + this.color[Math.floor(Math.random() * this.color.length)]
    }, 2000);

    
   }

  ngOnInit(): void {
  }

}

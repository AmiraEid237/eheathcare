import { Component, OnInit } from '@angular/core';
import { Route, Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  login(){
    this.router.navigate(["login"]);
  }
}

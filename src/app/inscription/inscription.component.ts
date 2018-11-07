import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router} from '@angular/router';

import { userService } from '../services/user.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

  constructor(private user: userService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    const name=form.value['name'];
    const forename=form.value['forename'];
    const email=form.value['email'];
    const password=form.value['password'];
    this.user.add(name,forename,email,password);

  }

}

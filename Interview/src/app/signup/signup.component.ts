import { Component } from '@angular/core';
import { AuthService } from '../auth_service/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { FooterComponent } from '../shared/footer/footer.component';



@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule,NavbarComponent,FooterComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  username = '';
  password = '';
  role='';

  constructor(private authService: AuthService, private router: Router) {}

  signup() {
    this.authService.signup(this.username, this.password,this.role).subscribe(
    
    );
  }

}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DataService } from '../admin_service/data.service';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { FooterComponent } from '../shared/footer/footer.component';


@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule,NavbarComponent,FooterComponent], 
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  countryName: string = '';
  stateName: string = '';
  districtName: string = '';
  cityName: string = '';

  constructor(private dataService: DataService) {}

  addCountry(): void {
    this.dataService.addCountry({ name: this.countryName }).subscribe(response => {
      console.log('Country added:', response);
      this.countryName = ''; // Clear the input field
    });
  }

  addState(): void {
    this.dataService.addState({ name: this.stateName }).subscribe(response => {
      console.log('State added:', response);
      this.stateName = ''; // Clear the input field
    });
  }

  addDistrict(): void {
    this.dataService.addDistrict({ name: this.districtName }).subscribe(response => {
      console.log('District added:', response);
      this.districtName = ''; // Clear the input field
    });
  }

  addCity(): void {
    this.dataService.addCity({ name: this.cityName }).subscribe(response => {
      console.log('City added:', response);
      this.cityName = ''; // Clear the input field
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../user_service/user.service';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  weatherData: any[] = [];
  countries: any[] = [];
  states: any[] = [];
  districts: any[] = [];
  cities: any[] = [];
  selectedLayout: number = 1;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.loadCountries();
    this.loadStates();
    this.loadDistricts();
    this.loadCities();
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      this.dataService.uploadExcel(file).subscribe(
        (data) => {
          this.weatherData = data;
        },
        (error) => {
          console.error('Error uploading file:', error);
        }
      );
    }
  }

  selectLayout(layout: number): void {
    this.selectedLayout = layout;
  }

  loadCountries(): void {
    this.dataService.getCountries().subscribe(
      (data) => {
        this.countries = data;
      },
      (error) => {
        console.error('Error fetching countries:', error);
      }
    );
  }

  loadStates(): void {
    this.dataService.getState().subscribe(
      (data) => {
        this.states = data;
      },
      (error) => {
        console.error('Error fetching states:', error);
      }
    );
  }

  loadDistricts(): void {
    this.dataService.getDistrict().subscribe(
      (data) => {
        this.districts = data;
      },
      (error) => {
        console.error('Error fetching districts:', error);
      }
    );
  }

  loadCities(): void {
    this.dataService.getCity().subscribe(
      (data) => {
        this.cities = data;
      },
      (error) => {
        console.error('Error fetching cities:', error);
      }
    );
  }
}

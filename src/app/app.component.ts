import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  first_name = '';
  gender = '';
  ip_address = '';
  last_name = '';
  email = '';
  title = 'app';
  results: any;  

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
	this.first_name = '';
	this.last_name = '';
	this.email = '';
	this.gender = '';
	this.ip_address = '';

    this.http.get('assets/users.json').subscribe(data => {
    	this.results = data ;
    });

  }
}    
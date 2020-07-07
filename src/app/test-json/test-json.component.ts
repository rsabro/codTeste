import { Component, OnInit, enableProdMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test-json',
  templateUrl: './test-json.component.html',
  styleUrls: ['./test-json.component.css']
})
export class TestJsonComponent implements OnInit {
  url = 'https://sasv-api.herokuapp.com/fichas';
  //url = 'https://rsabro75.github.io/teste/db.json';
  items = [];

  constructor(private http: HttpClient) {
    this.http.get(this.url).toPromise().then(data => {
      //alert(data);


      for (let key in data)
      if (data.hasOwnProperty(key))
        this.items.push(data[key]);

        console.log(this.items);
    });
  }

  ngOnInit(): void {
  }

}

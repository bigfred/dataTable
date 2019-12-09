import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {

  // data: Observable<any>;

  constructor(private http: HttpClient) { }

  private userData = new BehaviorSubject(null);


  login(credentials: { email: string, pw: string }) {
    this.http.get('https://randomuser.me/api/').pipe(
      map(data => {
        this.userData.next(data);
        // return this.userData.getValue();
      })
    );
  }

  getUser() {
    return this.userData.getValue();
  }

  logout() {
    this.userData.next(null);
  }

  ngOnInit() { }

}

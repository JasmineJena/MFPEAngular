import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

export class User {
  constructor(public status: string) {}
}

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  constructor(private httpClient: HttpClient) {}
// Provide userid and password for authentication, and once authentication is successful, 
//store JWT token in session
  authenticate(userid, password) {
    return this.httpClient
      .post<any>("http://localhost:8084/auth-ms/login", { 
        "userid": userid,
        "password": password
       })
      .pipe(

        map(userData => {
          console.log(userData);
          sessionStorage.setItem("userid", userData.userid);
          let tokenStr = "Bearer " + String(userData.token);
          console.log(tokenStr);
          sessionStorage.setItem("token", tokenStr);
          return userData;
        })
      );
 
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem("userid");
    console.log(!(user === null));
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem("userid");
  }
}

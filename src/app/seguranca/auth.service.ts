import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { EntradaLogin, RetornoLogin } from "./login/models/login.model";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private readonly API_URL: string = "http://localhost:8080/";
  constructor(private http: HttpClient, private router: Router) {}

  public realizarLogin(entradaLogin: EntradaLogin): Observable<RetornoLogin> {
    return this.http
      .post<RetornoLogin>(`${this.API_URL}/login`, entradaLogin)
      .pipe(tap((login) => console.log(login)));
  }
}

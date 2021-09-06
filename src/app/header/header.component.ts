import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit{
    constructor(
        private router: Router,
        private authService: AuthService
    ){}

    ngOnInit(){

    }

    logout(): void {
        this.authService.restartData();
        this.router.navigate(['/auth', 'login']);
    }

    isProfi(): boolean {
        return this.authService.isProfi();
    }

}
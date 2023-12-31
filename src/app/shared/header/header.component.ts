import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isSignedIn = false;
  id = 0;
  loc = this.location.path().indexOf('/user') > -1;
  @Output() toggleSidebar: EventEmitter<any> = new EventEmitter();
  constructor(
    private AuthService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }
  logout() {
    this.AuthService.signOut();
    this.isSignedIn = false;
    this.router.navigate(['/sign-in']);
  }
  toggleSideBar() {
    this.toggleSidebar.emit();
  }

  cart() {
    this.router.navigate(['cart'], { relativeTo: this.route });
  }
  link() {
    if (this.location.path().indexOf('/admin') > -1) {
      return this.router.navigate(['/admin/dashboard']);
    }
    return this.router.navigate(['/user/', this.id, 'home']);
  }
}

import { Component, signal, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [FormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class ProfileComponent implements OnInit {
  name = signal('');
  email = signal('');
  phone = signal('');
  address = signal('');
  saveSuccess = signal(false);

  constructor(
    public auth: AuthService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const user = this.auth.currentUser();
    if (user) {
      this.name.set(user.name);
      this.email.set(user.email);
      this.phone.set(user.phone);
      this.address.set(user.address);
    } else {
      this.router.navigate(['/']);
    }
  }

  onSave(): void {
    this.auth.updateProfile({
      name: this.name(),
      email: this.email(),
      phone: this.phone(),
      address: this.address(),
    });

    this.saveSuccess.set(true);
    setTimeout(() => this.saveSuccess.set(false), 3000);
  }

  onReset(): void {
    const user = this.auth.currentUser();
    if (user) {
      this.name.set(user.name);
      this.email.set(user.email);
      this.phone.set(user.phone);
      this.address.set(user.address);
    }
  }
}

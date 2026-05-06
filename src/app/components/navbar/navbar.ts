import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class NavbarComponent {
  showLoginModal = signal(false);
  loginEmail = signal('');
  loginPassword = signal('');
  loginError = signal('');
  showMobileMenu = signal(false);

  constructor(public auth: AuthService) {}

  openLogin(): void {
    this.showLoginModal.set(true);
    this.loginError.set('');
    this.loginEmail.set('');
    this.loginPassword.set('');
  }

  closeLogin(): void {
    this.showLoginModal.set(false);
  }

  onLogin(): void {
    const success = this.auth.login(this.loginEmail(), this.loginPassword());
    if (success) {
      this.showLoginModal.set(false);
    } else {
      this.loginError.set('อีเมลหรือรหัสผ่านไม่ถูกต้อง');
    }
  }

  onLogout(): void {
    this.auth.logout();
  }

  toggleMobileMenu(): void {
    this.showMobileMenu.update((v) => !v);
  }
}

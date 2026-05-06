import { Injectable, signal, computed } from '@angular/core';

export interface User {
  email: string;
  name: string;
  phone: string;
  address: string;
  avatar: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly _currentUser = signal<User | null>(null);
  private readonly _isLoggedIn = computed(() => this._currentUser() !== null);

  // Fixed credentials
  private readonly VALID_EMAIL = 'Pai@mail.com';
  private readonly VALID_PASSWORD = '1234';

  private readonly defaultUser: User = {
    email: 'Pai@mail.com',
    name: 'Pai',
    phone: '081-234-5678',
    address: '123 ถนนสุขุมวิท แขวงคลองเตย เขตคลองเตย กรุงเทพฯ 10110',
    avatar: '',
  };

  get currentUser() {
    return this._currentUser.asReadonly();
  }

  get isLoggedIn() {
    return this._isLoggedIn;
  }

  login(email: string, password: string): boolean {
    if (email === this.VALID_EMAIL && password === this.VALID_PASSWORD) {
      this._currentUser.set({ ...this.defaultUser });
      return true;
    }
    return false;
  }

  logout(): void {
    this._currentUser.set(null);
  }

  updateProfile(updatedUser: Partial<User>): void {
    const current = this._currentUser();
    if (current) {
      this._currentUser.set({ ...current, ...updatedUser });
    }
  }
}

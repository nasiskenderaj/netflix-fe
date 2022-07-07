import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalstoreService implements  Storage{

  private storage: Storage;
  [name: string]: any;
  length: number = 0;

  constructor() {
    this.storage = localStorage;
  }

  clear(): void {
    this.storage.clear();
  }

  getItem(key: string): string | null {
    return this.storage.getItem(key);
  }

  key(index: number): string | null {
    return this.storage.key(index);
  }

  removeItem(key: string): void {
    return this.storage.removeItem(key);
  }

  setItem(key: string, value: string): void {
    this.storage.setItem(key, value);
  }
}

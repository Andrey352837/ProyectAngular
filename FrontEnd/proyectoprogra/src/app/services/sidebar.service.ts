import { Injectable, signal, HostListener, effect, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService implements OnInit {
  private _isSidebarCollapsed = signal<boolean>(false);
  private _windowsWith = signal<number>(1024);

  constructor() {
    effect(() => {
      const windowsWith = this._windowsWith();

      this._isSidebarCollapsed.set(windowsWith < 768);
      console.log("windows changed");
    });
  }

  ngOnInit(): void {
    this._windowsWith.set(window.innerWidth);
  }

  get isSidebarCollapsed() {
    return this._isSidebarCollapsed();
  }

  set setIsSidebarCollapesed(isCollapsed: boolean) {
    this._isSidebarCollapsed.set(isCollapsed);
  }

  @HostListener('window:resize')
  onResize() {
    if (!window) return;
    this._windowsWith.set(window.innerWidth);
  }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomNavRailComponent } from '../../components/custom-nav-rail/custom-nav-rail.component';
import { CustomCardHeaderComponent } from '../../components/custom-card-header/custom-card-header.component';
import { ChangePasswordComponent } from '../../pages/change-password/change-password.component';

@Component({
  selector: 'app-main-layout',
  imports: [CommonModule, CustomNavRailComponent, CustomCardHeaderComponent, ChangePasswordComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {
  
  @Input() selectedNavItem: string = 'inicio';
  @Input() navRailOpened: boolean = true;
  @Input() navRailMode: 'over' | 'push' | 'side' = 'side';
  
  @Input() contentHeight: string = '600px';
  @Input() contentWidth: string = '1215px';
  @Input() showBackgroundPattern: boolean = false;
  
  @Output() navItemClick = new EventEmitter<string>();
  @Output() logoutClick = new EventEmitter<void>();
  @Output() navRailOpenedChange = new EventEmitter<boolean>();

  onNavItemClick(itemId: string): void {
    this.selectedNavItem = itemId;
    this.navItemClick.emit(itemId);
  }

  onLogout(): void {
    this.logoutClick.emit();
  }

  onNavRailOpenedChange(opened: boolean): void {
    this.navRailOpened = opened;
    this.navRailOpenedChange.emit(opened);
  }

  onNavigateToHome(): void {
    this.selectedNavItem = 'inicio';
    this.navItemClick.emit('inicio');
  }
}
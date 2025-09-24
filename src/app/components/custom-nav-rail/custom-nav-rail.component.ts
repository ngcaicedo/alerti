import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule, MatSidenav, MatDrawerToggleResult } from '@angular/material/sidenav';

export interface NavItem {
  id: string;
  label: string;
  icon: string;
  selected?: boolean;
}

@Component({
  selector: 'app-custom-nav-rail',
  imports: [CommonModule, MatIconModule, MatButtonModule, MatDividerModule, MatSidenavModule],
  templateUrl: './custom-nav-rail.component.html',
  styleUrl: './custom-nav-rail.component.scss'
})
export class CustomNavRailComponent {
  
  @ViewChild('sidenav') sidenav!: MatSidenav;
  
  @Input() selectedItemId: string = 'inicio';
  @Input() opened: boolean = true;
  @Input() mode: 'over' | 'push' | 'side' = 'side';
  
  @Output() itemClick = new EventEmitter<string>();
  @Output() logoutClick = new EventEmitter<void>();
  @Output() openedChange = new EventEmitter<boolean>();

  topItems: NavItem[] = [
    { id: 'inicio', label: 'Inicio', icon: 'home' }
  ];

  middleItems: NavItem[] = [
    { id: 'perfil', label: 'Perfil', icon: 'account_circle' },
    { id: 'calendario', label: 'Calendario', icon: 'today' },
    { id: 'anadir', label: 'Añadir', icon: 'add' },
    { id: 'inventario', label: 'Inventario', icon: 'pill' }
  ];

  bottomItem: NavItem = { id: 'salir', label: 'Salir', icon: 'arrow_back' };

  onItemClick(itemId: string): void {
    if (itemId === 'salir') {
      this.logoutClick.emit();
    } else {
      this.selectedItemId = itemId;
      this.itemClick.emit(itemId);
    }
  }

  isSelected(itemId: string): boolean {
    return this.selectedItemId === itemId;
  }

  toggle(): Promise<MatDrawerToggleResult> {
    return this.sidenav.toggle();
  }

  open(): Promise<MatDrawerToggleResult> {
    return this.sidenav.open();
  }

  close(): Promise<MatDrawerToggleResult> {
    return this.sidenav.close();
  }

  onOpenedChange(opened: boolean): void {
    this.opened = opened;
    this.openedChange.emit(opened);
  }
}

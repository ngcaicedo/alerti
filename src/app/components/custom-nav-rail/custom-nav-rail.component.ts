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
  svgPath: string;
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
    { id: 'inicio', label: 'Inicio', icon: 'home', svgPath: '../..//assets/icons/inicio.svg' }
  ];

  middleItems: NavItem[] = [
    { id: 'perfil', label: 'Perfil', icon: 'account_circle', svgPath: '../..//assets/icons/perfil.svg' },
    { id: 'calendario', label: 'Calendario', icon: 'today', svgPath: '../..//assets/icons/calendario.svg' },
    { id: 'anadir', label: 'Añadir', icon: 'add_circle', svgPath: '../..//assets/icons/anadir.svg' },
    { id: 'inventario', label: 'Inventario', icon: 'medication', svgPath: '../..//assets/icons/inventario.svg' }
  ];

  bottomItem: NavItem = { id: 'salir', label: 'Salir', icon: 'arrow_back', svgPath: '../..//assets/icons/salir.svg' };

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

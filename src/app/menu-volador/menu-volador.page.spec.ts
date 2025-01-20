import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuVoladorPage } from './menu-volador.page';

describe('MenuVoladorPage', () => {
  let component: MenuVoladorPage;
  let fixture: ComponentFixture<MenuVoladorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuVoladorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

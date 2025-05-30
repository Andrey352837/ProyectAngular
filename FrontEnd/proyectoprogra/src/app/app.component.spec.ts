import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';

describe('AppComponent', () => {
    let component: LeftSidebarComponent;
    let fixture: ComponentFixture<LeftSidebarComponent>;
  
    beforeEach(async () => {
      
      await TestBed.configureTestingModule({
        imports: [AppComponent]
      })
      .compileComponents();
  
      fixture = TestBed.createComponent(LeftSidebarComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
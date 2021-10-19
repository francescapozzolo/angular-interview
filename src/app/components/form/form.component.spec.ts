import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormComponent } from './form.component';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormComponent],
      imports: [HttpClientModule, ReactiveFormsModule, FormsModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    //createComponent instancia el componente que queremos probar
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a form with three fields', () => {
    expect(component.newCommentForm.contains('name')).toBeTrue();
    expect(component.newCommentForm.contains('email')).toBeTrue();
    expect(component.newCommentForm.contains('body')).toBeTrue();
  });

  it('field name is required', () => {
    const control = component.newCommentForm.get('name')
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
  });

  it('field email is required', () => {
    const control = component.newCommentForm.get('email')
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
  });

  it('field body is required', () => {
    const control = component.newCommentForm.get('body')
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
  });

  it('field email should be valid', () => {
    const control = component.newCommentForm.get('email')
    control?.setValue('test');
    expect(control?.valid).toBeFalsy();
  });

  it('field email should be valid', () => {
    const control = component.newCommentForm.get('email')
    control?.setValue('test@');
    expect(control?.valid).toBeFalsy();
  });

  it('field email should be valid', () => {
    const control = component.newCommentForm.get('email')
    control?.setValue('test@gmail');
    expect(control?.valid).toBeFalsy();
  });

  it('field email should be valid', () => {
    const control = component.newCommentForm.get('email')
    control?.setValue('test@gmail.com');
    expect(control?.valid).toBeTruthy();
  });
});

# Angular Forms

## FormControl
Stores the state of a form element

## FormGroup
FormGroup's can be nested

*e. g.*

- Registration FormGroup (root FormGroup):
    - Name FormGroup (firstName + lastName)
    - Address FormGroup

## Form Model
Object that retains the form: 
1. State
2. Value
3. Child controls
    - FormControls
    - Nested FormGroups

Same for template-driven as for reactive forms

## Directives
Template-driven forms use diferent directives as reactive forms

Template-driven (FormsModule - Form Model is created for us):
- ngForm
- ngModel
- ngModelGroup

name HTML attribute is needed for reference by FormControl

Reactive (ReactiveFormsModule - Form Model is **not** created for us):
- formGroup
- formControl
- formControlName
- formGroupName
- formArrayName

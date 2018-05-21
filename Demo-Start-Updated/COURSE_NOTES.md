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

## Notes
Reactive forms have **not** two-way data binding

The FormGroup object has an `controls` object for each FormControl

The `FormGroup.value` object has the value of each FormControl

Template-driven forms are mostly HTML, easy to use but not so suitable for complex scenarios like:
- Dinamically add input elements
- Watch what the user types
- Wait validation until typing stops
- Different validation for different situations
- Immutable data structures

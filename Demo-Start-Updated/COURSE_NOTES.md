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

## Template-driven forms
Reactive forms have **not** two-way data binding

The FormGroup object has an `controls` object for each FormControl

The `FormGroup.value` object has the value of each FormControl

Template-driven forms are mostly HTML, easy to use but not so suitable for complex scenarios like:
- Dinamically add input elements
- Watch what the user types
- Wait validation until typing stops
- Different validation for different situations
- Immutable data structures

## Reactive forms
FormBuilder: https://angular.io/api/forms/FormBuilder

setValue and patchValue:
- https://angular.io/api/forms/FormControl#setvalue
- https://angular.io/api/forms/FormControl#patchvalue

For input elements that do **not** need to be tracked **not** use FormControl

Use FormArrays to work with FormGroup's or FormControl's as an array

We initialize the FormGroup in `ngOnInit()` and not in the constructor to ensure it's available before building the Form Model

We can pass validation rules in the FormControl constructor e. g. `sendCatalog: new FormControl(/* validation rules */)`

Access Form Model properties with:
- `<formGroupName>.controls.<formControlName>.valid`
- `<formGroupName>.get('<formControlName>').valid` shorter syntax is perfect for nested FormGroup's. If the HTML element uses double quotes use for the get argument single quotes!

## setValue and patchValue
Set data with FormGroup.setValue({yourFormControlName: value})

**setValue requires to set the value for every FormControl in the Form Model**

With patchValue you can set individual FormControl values

Use setValue to set all FormControl's and patchValue to set a subset of the FormControl's

## FormControl
FormBuilder is like a factory that creates FormGroup's and FormControl's for us

## Notes
An Angular Module is like a box with components and directives. They can use only what is "imported" into the box

**In a real app the form may be declared in a feature module**

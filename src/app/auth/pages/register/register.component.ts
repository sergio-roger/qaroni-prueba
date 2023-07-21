import { UtilsService } from './../../../services/utils/utils.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit, AfterViewInit {
  public disabled: boolean = false;
  public form!: FormGroup;

  public submit: boolean = false;

  get childrens() {
    return this.get('childrens') as FormArray;
  }

  get pelis() {
    return this.get('pelis') as FormArray;
  }

  constructor(
    private formBuilder: FormBuilder,
    private utilService: UtilsService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  ngAfterViewInit(): void {
    this.get('showAddButtonPeli').valueChanges.subscribe((res) => {
      if (!res) {
        this.pelis.clear();
      }
    });

    this.get('showAddButtonChildren').valueChanges.subscribe((res) => {
      if (!res) {
        this.childrens.clear();
      }
    });
  }

  initForm(): void {
    this.form = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(this.utilService.expRegular('letter')),
        ],
      ],
      lastName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(this.utilService.expRegular('letter')),
        ],
      ],
      showAddButtonChildren: [false, []],
      childrens: this.formBuilder.array([]),
      showAddButtonPeli: [false, []],
      pelis: this.formBuilder.array([]),
    });
  }

  addChildren() {
    const input = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(this.utilService.expRegular('letter')),
        ],
      ],
      lastName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(this.utilService.expRegular('letter')),
        ],
      ],
    });

    this.childrens.push(input);
  }

  removeChidren(index: number) {
    this.childrens.removeAt(index);
  }

  addPeli() {
    const input = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(this.utilService.expRegular('letter')),
        ],
      ],
      director: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(this.utilService.expRegular('letter')),
        ],
      ],
      year: [
        '',
        [
          Validators.required,
          Validators.pattern(this.utilService.expRegular('year')),
        ],
      ],
      winOscar: [false, []],
    });

    this.pelis.push(input);
  }

  removePelis(index: number) {
    this.pelis.removeAt(index);
  }

  sendData(): void {
    this.submit = true;

    if (this.form.invalid) {
      alert('Complete el formulario');
      return;
    }
    console.log(this.form.value);
  }

  getChildrenByIndex(index: number): FormGroup {
    return this.childrens.at(index) as FormGroup;
  }

  getPelisByIndex(index: number): FormGroup {
    return this.pelis.at(index) as FormGroup;
  }

  get(control: string): AbstractControl {
    return this.form.get(control) as AbstractControl;
  }
}

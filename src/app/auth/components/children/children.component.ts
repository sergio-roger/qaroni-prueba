import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.scss'],
})
export class ChildrenComponent implements OnInit {
  @Input() form!: FormGroup<any>;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    // console.log(this.form);
  }

  get(control: string): AbstractControl {
    return this.form.get(control) as AbstractControl;
  }
}

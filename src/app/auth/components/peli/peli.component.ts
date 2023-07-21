import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-peli',
  templateUrl: './peli.component.html',
  styleUrls: ['./peli.component.scss']
})
export class PeliComponent implements OnInit {

  @Input() form!: FormGroup<any>

  constructor(
    private formBuilder: FormBuilder
  ){

  }

  ngOnInit(): void {
    // console.log(this.form);
  }

  get(control: string): AbstractControl {
    return this.form.get(control) as AbstractControl;
  }
}

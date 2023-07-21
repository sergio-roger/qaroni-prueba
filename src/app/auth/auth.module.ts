import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './pages/register/register.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ChildrenComponent } from './components/children/children.component';
import { PeliComponent } from './components/peli/peli.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ChildrenComponent,
    PeliComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
  ],
})
export class AuthModule {}

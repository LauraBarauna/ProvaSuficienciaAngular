import { Component, Input } from '@angular/core';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputNumberModule } from 'primeng/inputnumber';
import { MessageModule } from 'primeng/message';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';


@Component({
  selector: 'app-collab-personal-step',
  imports: [
    FloatLabelModule,
    InputNumberModule,
    MessageModule,
    ReactiveFormsModule,
    InputTextModule
  ],
  templateUrl: './collab-personal-step.html',
  styleUrl: './collab-personal-step.css',
})
export class CollabPersonalStep {
  @Input() form!: FormGroup;
}

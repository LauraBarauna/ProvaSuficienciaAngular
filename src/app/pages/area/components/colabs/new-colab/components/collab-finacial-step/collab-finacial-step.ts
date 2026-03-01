import { Component, Input } from '@angular/core';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'app-collab-finacial-step',
  imports: [
    FloatLabelModule,
    InputNumberModule,
    ReactiveFormsModule,
    MessageModule
  ],
  templateUrl: './collab-finacial-step.html',
  styleUrl: './collab-finacial-step.css',
})
export class CollabFinacialStep {
  @Input() form !: FormGroup;
}

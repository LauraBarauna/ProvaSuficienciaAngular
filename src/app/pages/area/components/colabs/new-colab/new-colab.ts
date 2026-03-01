import { Component, inject } from '@angular/core';
import { CollabPersonalStep } from "./components/collab-personal-step/collab-personal-step";
import { CollabFinacialStep } from './components/collab-finacial-step/collab-finacial-step';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api'
import { Collab } from '../../../../../core/model/collab.modal';
import { CollabService } from '../../../../../core/service/collab.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-colab',
  imports: [
    CollabPersonalStep,
    CollabFinacialStep,
    ReactiveFormsModule,
    ToastModule,
    ButtonModule
  ],
  providers: [MessageService],
  templateUrl: './new-colab.html',
  styleUrl: './new-colab.css',
})
export class NewColab {
  form: FormGroup;
  private messageService = inject(MessageService);

  constructor(
    private fb: FormBuilder,
    private collabService: CollabService,
    private router: Router) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      age: [null, Validators.required],
      salary: [null, Validators.required],
    })
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.form.markAsPristine();
      this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Preencha os campos obrigatórios.', life: 3000 });
      return;
    }

    const formValues = this.form.value;

    const body: Collab = {
      name: formValues.name,
      age: formValues.age,
      salary: formValues.salary
    }

    this.collabService.createCollab(body)
      .subscribe({
        next: (res) => {
          this.messageService.add({ severity: 'success', summary: 'Erro', detail: 'Colaborador cadastrado.', life: 3000 });
          this.router.navigate(['/app/collabs']);
        },
        error: (err) => console.error("Erro ao criar collab: ", err)
      })

  }
}

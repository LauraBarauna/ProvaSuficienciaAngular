import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { CurrencyPipe } from '@angular/common';
import { Collab } from '../../../../../core/model/collab.modal';
import { CollabService } from '../../../../../core/service/collab.service';
import { MultiSelectModule } from 'primeng/multiselect';
import { RouterLink } from "@angular/router";
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessageService, ConfirmationService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
  selector: 'app-all-collabs',
  imports: [
    TableModule,
    TagModule,
    ButtonModule,
    CurrencyPipe,
    MultiSelectModule,
    RouterLink,
    ConfirmDialogModule,
    ToastModule,
    DialogModule,
    InputTextModule,
    ReactiveFormsModule,
    InputNumberModule
  ],
  providers: [ConfirmationService, MessageService],
  templateUrl: './all-collabs.html',
  styleUrl: './all-collabs.css',
})
export class AllCollabs implements OnInit {

  private confirmationService = inject(ConfirmationService);
  private messageService = inject(MessageService);

  visible = false;
  collaborators: Collab[] = [];
  isLoading = true;
  collabsNames: any[] = [];
  form: FormGroup;
  collabId: any;

  constructor(
    private collabService: CollabService,
    private crf: ChangeDetectorRef,
    private fb: FormBuilder,
  ) {
    this.form = this.fb.group({
      name: [''],
      age: [null],
      salary: [null],
    })
  }

  ngOnInit(): void {
    this.collabService.getAllCollabs()
      .subscribe({
        next: (res) => {
          this.collaborators = res;
          this.collabsNames = this.collaborators.map(c => ({ label: c.name, value: c.name }));
          console.log(this.collabsNames)
          this.isLoading = false;
          this.crf.detectChanges();
        },
        error: (err) => console.error("Erro ao buscar collabs: ", err)
      })
  }

  deleteCollab(id: string | undefined, name: string) {
    this.collabService.deleteCollab(id)
      .subscribe({
        next: (res) => {
          this.messageService.add({ severity: 'success', summary: 'Collab Deletado', detail: `Collab ${name} deletado(a) com sucesso!` });
          this.ngOnInit();
        },
        error: (err) => console.error("Erro ao deletar collab com id ", id, " : ", err)
      })
  }


  confirmDeleteCollab(collab: Collab, event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: `Tem certeza que você quer deletar o(a) collab ${collab.name}?`,
      header: 'Deletar',
      icon: 'pi pi-info-circle',
      rejectLabel: 'Cancelar',
      rejectButtonProps: {
        label: 'Cancelar',
        severity: 'secondary',
        outlined: true
      },
      acceptButtonProps: {
        label: 'Deletar',
        severity: 'danger'
      },

      accept: () => {
        this.deleteCollab(collab.id, collab.name);
      },
      reject: () => {
        this.messageService.add({ severity: 'error', summary: 'Ação Cancelada', detail: `Você cancelou a exclusão do(a) collab ${collab.name}` });
      }
    });
    this.crf.detectChanges()
  }

  openEditCollabModal(collab: Collab) {
    this.visible = true;
    this.form.patchValue({
      name: collab.name,
      age: collab.age,
      salary: collab.salary
    });
    this.collabId = collab.id;
  }

  editCollab() {
    const formValues = this.form.value;

    const body: Collab = {
      id: this.collabId,
      name: formValues.name,
      age: formValues.age,
      salary: formValues.salary
    };

    this.collabService.editCollab(body)
      .subscribe({
        next: (res) => {
          this.messageService.add({ severity: 'success', summary: 'Collab editado', detail: `Collab ${res.name} editado(a) com sucesso!` });
          this.visible = false;
          this.crf.detectChanges();
          this.ngOnInit();
        },
        error: (err) => console.error("Erro ao editar collab: ", err)
      })
  }
}

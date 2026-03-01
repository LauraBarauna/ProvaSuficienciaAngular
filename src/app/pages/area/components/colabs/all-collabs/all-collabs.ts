import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { CurrencyPipe } from '@angular/common';
import { Collab } from '../../../../../core/model/collab.modal';
import { CollabService } from '../../../../../core/service/collab.service';
import { MultiSelectModule } from 'primeng/multiselect';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-all-collabs',
  imports: [
    TableModule,
    TagModule,
    ButtonModule,
    CurrencyPipe,
    MultiSelectModule,
    RouterLink
],
  templateUrl: './all-collabs.html',
  styleUrl: './all-collabs.css',
})
export class AllCollabs implements OnInit {
  collaborators: Collab[] = [];
  isLoading = true;
  collabsNames: any[] = [];

  constructor(
    private collabService: CollabService,
    private crf: ChangeDetectorRef
  ) {}

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

  deleteCollab(collab: Collab) {}

  editCollab(collab: Collab) {}
}

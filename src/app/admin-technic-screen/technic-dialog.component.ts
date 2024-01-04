import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AwsApiService } from '../aws-api.service';

@Component({
    selector: 'technic-dialog',
    templateUrl: 'technic-dialog.component.html',
})
export class TechnicDialogComponent {

    technicForm: FormGroup;

    constructor(private formBuilder: FormBuilder, private api: AwsApiService) {
        this.technicForm = this.formBuilder.group({
            nombre: ['', Validators.required],
            nivel: ['', Validators.required],
            tipo: ['', Validators.required],
            videoExplain: ['', Validators.required],
            videoExampl: ['', Validators.required],
        });
    }

    onSubmit() {
        if (this.technicForm.valid) {
            console.log('Formulario de inicio de sesión', this.technicForm.value);
            const technic = this.technicForm.value;
            technic['ID'] = 'technic+' + technic['nombre']
            technic['SEARCH'] = 'technic'
            this.api.performAction("process_object", { "object_data": this.technicForm.value }).subscribe((result) => {
                console.log(result)
            });
        }
    }
}
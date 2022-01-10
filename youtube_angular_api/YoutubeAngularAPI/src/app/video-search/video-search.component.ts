import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-video-search',
  templateUrl: './video-search.component.html',
  styleUrls: ['./video-search.component.scss']
})
export class VideoSearchComponent implements OnInit {

  search: FormGroup;
  submitted: boolean = false;


  constructor(
    private formBuilder:  FormBuilder
  ) {
    this.search = this.formBuilder.group({
      search: ['',[Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  get formulario() {
    return this.search.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.search.invalid) return;

    //Podemos obtener en un json TODOS los valores de los controles del formulario
    console.log(this.search.value.search)
    this.onReset();
    //Deberíamos realizar esta petición para comprobar el usuario y después navegar a la pantalla principal
    //Después del aviso
    /*this.restUserService.login(this.user).subscribe({
      next: (user) => {
        this.notificationService.showMessage(`Usuario ${user.email} logeado.`, 'principal', {queryParams: this.user});
        this.user = user;
      },
      error: e => {
        this.notificationService.showMessage(`Fallo en el login: `+e)
      }
    })*/

  }

    //Permite limpiar el formulario
    onReset() {
      this.submitted = false;
      this.search.reset();
    }
}

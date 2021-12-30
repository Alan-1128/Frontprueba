import { Component, OnInit } from '@angular/core';
import { usuarios } from '../../services/usuarios.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  
  constructor(public usu:usuarios, private router:Router) { }

  ngOnInit(): void {
    
  }

  logout():void {
    this.usu.logout();
    Swal.fire({
      title: 'Has cerrado sesión!',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
    this.router.navigate(['/logging']);
  }

}

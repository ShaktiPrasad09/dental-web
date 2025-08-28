import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [RouterLink, RouterLinkActive],
    templateUrl: './header.html',
    styleUrls: ['./header.scss']
})
export class HeaderComponent {
    closeNavbar() {
        const navbarToggler = document.querySelector('.navbar-toggler') as HTMLElement;
        const navbar = document.getElementById('navbarNav');

        // Check if we're in mobile view and navbar is open
        if (navbarToggler &&
            window.getComputedStyle(navbarToggler).display !== 'none' &&
            navbar?.classList.contains('show')) {
            navbarToggler.click();
        }
    }
}

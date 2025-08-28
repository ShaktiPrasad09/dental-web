import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    selector: 'app-my-team',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './my-team.html',
    styleUrls: ['./my-team.scss']
})
export class MyTeamComponent {
    team = [
        {
            name: 'Dr. Mally Dental',
            role: 'Dentist',
            image: '/hero.JPG'
        },
        {
            name: 'Dr. Alex Yardo',
            role: 'Cosmetic Dentist',
            image: '/hero.JPG'
        },
        {
            name: 'Dr. Michael Smith',
            role: 'Restorative Dentist',
            image: '/hero.JPG'
        }
    ];
}

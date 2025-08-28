import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    selector: 'app-services',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './services.html',
    styleUrls: ['./services.scss']
})
export class ServicesComponent {
    services = [
        {
            imageUrl: 'https://static.wixstatic.com/media/91fc24c6d5e44312a2de8ea6b848d562.jpg/v1/crop/x_2364,y_0,w_3941,h_4912/fill/w_650,h_810,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/At%20the%20Dentist.jpg',
            title: 'Cosmetic Dentistry',
            subtitle: 'Enhancing Your Smile'
        },
        {
            imageUrl: 'https://static.wixstatic.com/media/88aac0_80e07d8a89aa4db4b59bcc70289e2b5f~mv2.jpeg/v1/fill/w_650,h_810,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Services_comp-m45gjy714.jpeg',
            title: 'Teeth Whitening',
            subtitle: 'Professional Consultation'
        },
        {
            imageUrl: 'https://static.wixstatic.com/media/88aac0_94e430058d154c15a482f3cbbbce7029~mv2.jpeg/v1/fill/w_650,h_810,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Team_comp-m45gjy7x19.jpeg',
            title: 'Dental Implants',
            subtitle: 'Restorative Procedures'
        }
    ];
}
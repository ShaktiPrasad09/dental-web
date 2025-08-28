import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './about.html',
    styleUrls: ['./about.scss']
})
export class AboutComponent {
    aboutImages = [
        {
            src: 'https://images.unsplash.com/photo-1633105130424-a4a098a55e92?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            alt: 'Clinic Hallway'
        },
        {
            src: 'https://images.unsplash.com/photo-1704455306925-1401c3012117?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            alt: 'Dental Chair'
        },
        {
            src: 'https://plus.unsplash.com/premium_photo-1682145288913-979906a9ebc8?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            alt: 'Clinic Decor'
        }
    ];
}
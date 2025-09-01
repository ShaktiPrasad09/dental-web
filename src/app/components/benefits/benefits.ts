import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    selector: 'app-benefits',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './benefits.html',
    styleUrls: ['./benefits.scss']
})
export class BenefitsComponent {

    features = [
        {
            title: 'Compassionate Care',
            description: 'Our team of skilled professionals provides comprehensive dental care with years of experience and expertise.',
            image: 'assets/hero.JPG'
        },
        {
            title: 'State Of the Art Technology',
            description: 'We utilize cutting-edge dental technology and modern equipment for precise and effective treatments.',
            image: 'assets/hero.JPG'
        },
        {
            title: 'Professional Team',
            description: 'Flexible payment options and insurance plans to make quality dental care accessible to everyone.',
            image: 'assets/hero.JPG'
        },
        {
            title: 'Personalized Approach',
            description: 'Our dedicated team works closely with you to create tailored treatment plans that suit your unique needs.',
            image: 'assets/hero.JPG'
        }
    ];

    selectedFeatureIndex = 0;

    selectFeature(index: number) {
        this.selectedFeatureIndex = index;
    }
}
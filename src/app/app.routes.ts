import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about';
import { LandingComponent } from './components/landing/landing';
import { ServicesComponent } from './components/services/services';
import { BenefitsComponent } from './components/benefits/benefits';
import { MyTeamComponent } from './components/my-team/my-team';
import { TestimonialsComponent } from './components/testimonials/testimonials';

export const routes: Routes = [
    {
        path: '',
        component: LandingComponent,
        title: 'Dental Hero - Home'
    },
    {
        path: 'about',
        component: AboutComponent,
        title: 'Dental Hero - About'
    },
    {
        path: 'services',
        component: ServicesComponent,
        title: 'Dental Hero - Services'
    },
    {
        path: 'benefits',
        component: BenefitsComponent,
        title: 'Dental Hero - Benefits'
    },
    {
        path: 'team',
        component: MyTeamComponent,
        title: 'Dental Hero - My Team'
    },
    {
        path: 'testimonials',
        component: TestimonialsComponent,
        title: 'Dental Hero - Testimonials'
    },
    {
        path: 'contact',
        redirectTo: '/',
        pathMatch: 'full'
    },
    // Fallback route for all other paths
    { path: '**', redirectTo: '' }
];

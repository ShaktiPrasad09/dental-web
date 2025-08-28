import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    selector: "app-testimonials",
    standalone: true,
    imports: [CommonModule],
    templateUrl: "./testimonials.html",
    styleUrls: ["./testimonials.scss"]
})
export class TestimonialsComponent {
    testimonials = [
        {
            quote: '“From the moment I walked in, the staff made me feel so comfortable and cared for. Dr. Mally is incredibly professional and takes the time to explain everything clearly. I was nervous about getting a root canal, but the procedure was quick and pain-free. I’m so happy with the results and will definitely be coming back for all my dental needs!”',
            author: "John Doe"
        },
        {
            quote: '“They are truly the best! My kids used to fear going to the dentist, but Dr.Mally and the team make every visit so easy and enjoyable.They go above and beyond to ensure we\'re comfortable and provide top-notch care. I’ve never felt more confident in my smile—thank you for everything, Dr. Mally!”',
            author: "Jane Smith"
        },
        {
            quote: '“Dr. Mally is extremely knowledgeable and gentle, and the entire staff is friendly and kind. They even helped me understand my insurance benefits, which was such a relief. I recommend them to anyone looking for exceptional dental care!”',
            author: "Emily Johnson"
        }
    ];
}

import { Component } from '@angular/core';

@Component({
    selector: 'app-upload-video',
    templateUrl: './upload-video.component.html',
    styleUrls: ['./upload-video.component.css']
})
export class UploadVideoComponent {
    uploadProgress: number | null = null;
    videoUrl: string | null = null;

    onFileSelected(event: any) {
        const file: File = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                this.videoUrl = reader.result as string;
            };
            reader.readAsDataURL(file);
        }
    }

    uploadVideo() {
        // Implement video upload logic here
    }
}

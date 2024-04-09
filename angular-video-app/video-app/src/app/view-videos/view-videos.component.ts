import { Component } from '@angular/core';

interface Video {
    url: string;
}

@Component({
    selector: 'app-view-videos',
    templateUrl: './view-videos.component.html',
    styleUrls: ['./view-videos.component.css']
})
export class ViewVideosComponent {
    videos: Video[] = [
        { url: 'path_to_video_1.mp4' },
        { url: 'path_to_video_2.mp4' },
        { url: 'path_to_video_3.mp4' }
    ];
}

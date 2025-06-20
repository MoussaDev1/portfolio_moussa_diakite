import { Component } from '@angular/core';

export interface Project {
  image: string;
  name: string;
  description: string;
  technologies: string[];
  github: string;
}

@Component({
  selector: 'app-project-preview',
  imports: [],
  templateUrl: './project-preview.component.html',
  styleUrl: './project-preview.component.scss',
})
export class ProjectPreviewComponent {
  projects: Project[] = [
    {
      image: 'assets/images/exosaver_img.png',
      name: 'ExoSaver',
      description: 'Application web pour arranger les ses apprentissage.',
      technologies: ['Angular', 'TypeScript', 'SCSS', 'Spring Boot'],
      github: 'https://github.com/MoussaDev1/exosaver_project',
    },
    {
      image: 'assets/images/manga_img.png',
      name: 'Mangax',
      description: "Application web de notation d'oeuvre type manga/animé.",
      technologies: ['PHP', 'Scss', 'Javascript'],
      github: 'https://github.com/MoussaDev1/Mangax',
    },
    {
      image: 'assets/images/cvven_img.png',
      name: 'Projet CVVEN',
      description: "Application web de gestions de chambre d'hotels.",
      technologies: ['PHP', 'CodeIgniter', 'Bootstrap', 'MySQL', 'Css'],
      github: 'https://github.com/MoussaDev1/Projet-CVVEN',
    },
  ];
}

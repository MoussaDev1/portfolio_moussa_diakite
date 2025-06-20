import { Component } from '@angular/core';

export interface Skill {
  type: string;
  known: string[];
  icon?: string;
}

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  skills: Skill[] = [
    {
      type: 'Langages',
      known: ['JavaScript', 'TypeScript', 'Java', 'PHP'],
    },
    {
      type: 'Frameworks',
      known: ['Spring Boot', 'Angular', 'Vuejs', 'Laravel'],
    },
    {
      type: 'Bases de données',
      known: ['PostgreSQL', 'MySQL', 'MongoDB'],
    },
    {
      type: 'Outils',
      known: ['Git', 'Docker'],
    },
  ];
}

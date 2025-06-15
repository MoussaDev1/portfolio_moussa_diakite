import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
export interface ContactLink {
  icon: IconDefinition;
  label: string;
  url?: string;
}
@Component({
  selector: 'app-hero',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  contactLink: ContactLink[] = [
    {
      icon: faGithub,
      label: 'Github',
      url: 'https://github.com/MoussaDev1',
    },
    {
      icon: faLinkedin,
      label: 'Linkedin',
      url: 'https://www.linkedin.com/in/moussa-diakite-bba318265',
    },
    {
      icon: faEnvelope,
      label: 'moussa.diakite.dev@gmail.com',
      url: 'mailto:moussa.diakite.dev@gmail.com',
    },
  ];
}

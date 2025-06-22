import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectPreviewComponent } from './components/project-preview/project-preview.component';
@Component({
  selector: 'app-home',
  imports: [HeroComponent, SkillsComponent, ProjectPreviewComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}

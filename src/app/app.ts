import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { About } from './about/about';
import { CertandRecognition } from './certand-recognition/certand-recognition';
import { Education } from './education/education';
import { Experience } from './experience/experience';
import { Header } from './header/header';
import { Skills } from './skills/skills';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    Header,
    About,
    CertandRecognition,
    Education,
    Experience,
    Skills
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('Abhijeet');
  public maintainence: boolean = false; //maintainence flag
}

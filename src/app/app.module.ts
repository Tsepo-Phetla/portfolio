import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './project/project.component';
import { ContactComponent } from './contact/contact.component';
import { DownloadButtonComponent } from './download-button/download-button.component';
import { ExperienceComponent } from './experience/experience.component';
import { ExperienceContentComponent } from './experience-content/experience-content.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { SkillsComponent } from './skills/skills.component';
import { ZoomoutComponent } from './zoomout/zoomout.component';
import { ContactContentComponent } from './contact-content/contact-content.component';
import { IconsComponent } from './icons/icons.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ProjectComponent,
    ContactComponent,
    DownloadButtonComponent,
    ExperienceComponent,
    ExperienceContentComponent,
    MySkillsComponent,
    SkillsComponent,
    ZoomoutComponent,
    ContactContentComponent,
    IconsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

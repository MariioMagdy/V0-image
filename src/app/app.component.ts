import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"
import { NavbarComponent } from "./components/navbar/navbar.component"
import { HeroComponent } from "./components/hero/hero.component"
import { FeaturesComponent } from "./components/features/features.component"
import { FutureComponent } from "./components/future/future.component"
import { RobotSectionComponent } from "./components/robot-section/robot-section.component"
import { NewsletterComponent } from "./components/newsletter/newsletter.component"
import { BlogComponent } from "./components/blog/blog.component"
import { CtaComponent } from "./components/cta/cta.component"
import { FooterComponent } from "./components/footer/footer.component"

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    FeaturesComponent,
    FutureComponent,
    RobotSectionComponent,
    NewsletterComponent,
    BlogComponent,
    CtaComponent,
    FooterComponent,
  ],
  template: `
    <div class="app-container">
      <app-navbar></app-navbar>
      <app-hero></app-hero>
      <app-features></app-features>
      <app-future></app-future>
      <app-robot-section></app-robot-section>
      <app-newsletter></app-newsletter>
      <app-blog></app-blog>
      <app-cta></app-cta>
      <app-footer></app-footer>
    </div>
  `,
  styles: [
    `
    .app-container {
      background-color: #040C18;
      color: white;
      font-family: 'Manrope', sans-serif;
    }
  `,
  ],
})
export class AppComponent {
  title = "gpt3-landing"
}


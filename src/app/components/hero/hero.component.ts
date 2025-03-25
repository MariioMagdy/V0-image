import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"

@Component({
  selector: "app-hero",
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="hero" id="home">
      <div class="container">
        <div class="hero-content">
          <h1>Let's Build Something amazing with GPT-3 OpenAI</h1>
          <p>
            Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. 
            Indulgence way everything joy alteration boisterous the attachment.
          </p>
          <div class="email-input">
            <input type="email" placeholder="Your Email Address" [(ngModel)]="email">
            <button>Get Started</button>
          </div>
          <div class="people">
            <div class="people-images">
              <div class="person" *ngFor="let i of [1,2,3,4,5,6]"></div>
            </div>
            <p>1,600 people requested access a visit in last 24 hours</p>
          </div>
        </div>
        <div class="hero-image">
          <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture.PNG-Pxf6fHoGMJgmtlqVTSsFExJaNPpWnL.png" alt="AI Head Visualization">
        </div>
      </div>
    </section>
  `,
  styles: [
    `
    .hero {
      padding: 4rem 0;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
      display: flex;
      align-items: center;
      gap: 2rem;
    }
    
    .hero-content {
      flex: 1;
    }
    
    h1 {
      font-size: 3.5rem;
      line-height: 1.2;
      font-weight: bold;
      background: linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 1.5rem;
    }
    
    p {
      color: #81AFDD;
      font-size: 1.25rem;
      line-height: 1.6;
      margin-bottom: 2rem;
    }
    
    .email-input {
      display: flex;
      margin-bottom: 2rem;
    }
    
    input {
      flex: 1;
      background: #052D56;
      border: none;
      padding: 1rem 1.5rem;
      color: white;
      border-radius: 5px 0 0 5px;
    }
    
    button {
      background: #FF4820;
      color: white;
      border: none;
      padding: 1rem 1.5rem;
      border-radius: 0 5px 5px 0;
      cursor: pointer;
      font-weight: bold;
    }
    
    .people {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    
    .people-images {
      display: flex;
    }
    
    .person {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background-color: #71E5FF;
      border: 2px solid #052D56;
      margin-left: -10px;
    }
    
    .person:first-child {
      margin-left: 0;
    }
    
    .people p {
      font-size: 0.875rem;
      margin-bottom: 0;
    }
    
    .hero-image {
      flex: 1;
      display: flex;
      justify-content: center;
    }
    
    .hero-image img {
      max-width: 100%;
      height: auto;
    }
    
    @media (max-width: 992px) {
      .container {
        flex-direction: column;
      }
      
      h1 {
        font-size: 2.5rem;
      }
    }
  `,
  ],
})
export class HeroComponent {
  email = ""
}


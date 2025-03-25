import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"

@Component({
  selector: "app-newsletter",
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="newsletter">
      <div class="container">
        <div class="newsletter-box">
          <div class="newsletter-content">
            <p>Request Early Access to Get Started</p>
            <h3>Register today & start exploring the endless possibilities.</h3>
          </div>
          <div class="newsletter-button">
            <button>Get Started</button>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
    .newsletter {
      padding: 4rem 0;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }
    
    .newsletter-box {
      background: linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%);
      border-radius: 10px;
      padding: 2rem 3rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .newsletter-content p {
      font-size: 0.875rem;
      margin-bottom: 0.5rem;
    }
    
    .newsletter-content h3 {
      font-size: 1.5rem;
      font-weight: bold;
      color: black;
    }
    
    .newsletter-button button {
      background: black;
      color: white;
      border: none;
      padding: 1rem 2rem;
      border-radius: 40px;
      font-weight: bold;
      cursor: pointer;
    }
    
    @media (max-width: 768px) {
      .newsletter-box {
        flex-direction: column;
        gap: 2rem;
        text-align: center;
      }
    }
  `,
  ],
})
export class NewsletterComponent {}


import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"

@Component({
  selector: "app-cta",
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="cta">
      <div class="container">
        <div class="cta-content">
          <h2>Do you want to step in to the future before others</h2>
          <button>Request Early Access</button>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
    .cta {
      padding: 4rem 0;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }
    
    .cta-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    
    .cta-content h2 {
      font-size: 2.5rem;
      line-height: 1.2;
      font-weight: bold;
      max-width: 700px;
      margin-bottom: 2rem;
      background: linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    
    .cta-content button {
      background: transparent;
      color: white;
      border: 1px solid white;
      padding: 1rem 2rem;
      font-size: 1rem;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    
    .cta-content button:hover {
      background: white;
      color: #042C54;
    }
    
    @media (max-width: 768px) {
      .cta-content h2 {
        font-size: 2rem;
      }
    }
  `,
  ],
})
export class CtaComponent {}


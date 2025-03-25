import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"

@Component({
  selector: "app-robot-section",
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="robot-section">
      <div class="container">
        <div class="robot-content">
          <div class="robot-image">
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture.PNG-Pxf6fHoGMJgmtlqVTSsFExJaNPpWnL.png" alt="AI Robot">
          </div>
          <div class="robot-text">
            <p>Request Early Access to Get Started</p>
            <h2>The possibilities are beyond your imagination</h2>
            <p class="description">
              Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. 
              Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
            </p>
            <p class="early-access">Request Early Access to Get Started</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
    .robot-section {
      padding: 4rem 0;
      background: linear-gradient(90deg, #042c54 0%, #031B34 100%);
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }
    
    .robot-content {
      display: flex;
      align-items: center;
      gap: 4rem;
    }
    
    .robot-image {
      flex: 1;
    }
    
    .robot-image img {
      max-width: 100%;
      height: auto;
    }
    
    .robot-text {
      flex: 1;
    }
    
    .robot-text p:first-child {
      color: #71E5FF;
      font-size: 1rem;
      margin-bottom: 1rem;
    }
    
    .robot-text h2 {
      font-size: 2.5rem;
      line-height: 1.2;
      font-weight: bold;
      background: linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 1.5rem;
    }
    
    .description {
      color: #81AFDD;
      font-size: 1rem;
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }
    
    .early-access {
      color: #FF4820;
      font-size: 1rem;
    }
    
    @media (max-width: 992px) {
      .robot-content {
        flex-direction: column;
      }
      
      .robot-text h2 {
        font-size: 2rem;
      }
    }
  `,
  ],
})
export class RobotSectionComponent {}


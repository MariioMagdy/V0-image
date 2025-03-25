import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"

interface FuturePoint {
  title: string
  description: string
}

@Component({
  selector: "app-future",
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="future" id="case-studies">
      <div class="container">
        <div class="future-heading">
          <h1>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
          <p>Request Early Access to Get Started</p>
        </div>
        
        <div class="future-content">
          <div class="future-points">
            <div class="future-point" *ngFor="let point of futurePoints">
              <div class="point-title">
                <div class="line"></div>
                <h3>{{ point.title }}</h3>
              </div>
              <div class="point-description">
                <p>{{ point.description }}</p>
              </div>
            </div>
          </div>
          
          <div class="future-image">
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture.PNG-Pxf6fHoGMJgmtlqVTSsFExJaNPpWnL.png" alt="Future Technology">
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
    .future {
      padding: 4rem 0;
      background: #040C18;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }
    
    .future-heading {
      margin-bottom: 4rem;
    }
    
    .future-heading h1 {
      font-size: 2.5rem;
      line-height: 1.2;
      font-weight: bold;
      max-width: 700px;
      background: linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 1rem;
    }
    
    .future-heading p {
      color: #FF4820;
      font-size: 1rem;
    }
    
    .future-content {
      display: flex;
      gap: 4rem;
    }
    
    .future-points {
      flex: 1;
    }
    
    .future-point {
      margin-bottom: 2rem;
    }
    
    .point-title {
      margin-bottom: 1rem;
    }
    
    .line {
      width: 38px;
      height: 3px;
      background: linear-gradient(103.22deg, #AE67FA -13.86%, #F49867 99.55%);
      margin-bottom: 0.5rem;
    }
    
    .point-title h3 {
      font-size: 1.25rem;
      font-weight: bold;
      color: white;
    }
    
    .point-description p {
      color: #81AFDD;
      font-size: 1rem;
      line-height: 1.6;
    }
    
    .future-image {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .future-image img {
      max-width: 100%;
      height: auto;
    }
    
    @media (max-width: 992px) {
      .future-content {
        flex-direction: column;
      }
      
      .future-heading h1 {
        font-size: 2rem;
      }
    }
  `,
  ],
})
export class FutureComponent {
  futurePoints: FuturePoint[] = [
    {
      title: "Improving end distrusts instantly",
      description:
        "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
    },
    {
      title: "Become the tended active",
      description:
        "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
    },
    {
      title: "Message or am nothing",
      description:
        "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",
    },
    {
      title: "Really boy law county",
      description:
        "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.",
    },
  ]
}


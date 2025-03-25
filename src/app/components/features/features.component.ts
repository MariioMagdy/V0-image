import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"

interface Feature {
  title: string
  description: string
}

@Component({
  selector: "app-features",
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="features" id="what-is-gpt">
      <div class="container">
        <div class="features-header">
          <h2>What is GPT-3</h2>
          <p>
            We so opinion friends me message as delight. Whole front do of plate heard oh ought. 
            His defective nor convinced residence own. Connection has put impossible own apartments boisterous. 
            At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.
          </p>
        </div>
        
        <div class="features-heading">
          <h1>The possibilities are beyond your imagination</h1>
          <a href="#library">Explore The Library</a>
        </div>
        
        <div class="features-container">
          <div class="feature-card" *ngFor="let feature of features">
            <div class="feature-title">
              <div class="line"></div>
              <h3>{{ feature.title }}</h3>
            </div>
            <div class="feature-description">
              <p>{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
    .features {
      padding: 4rem 0;
      background: #031B34;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }
    
    .features-header {
      display: flex;
      justify-content: space-between;
      gap: 4rem;
      margin-bottom: 4rem;
    }
    
    .features-header h2 {
      font-size: 2rem;
      font-weight: bold;
      min-width: 180px;
      background: linear-gradient(103.22deg, #AE67FA -13.86%, #F49867 99.55%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    
    .features-header p {
      color: #81AFDD;
      font-size: 1rem;
      line-height: 1.6;
    }
    
    .features-heading {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 4rem;
    }
    
    .features-heading h1 {
      font-size: 2.5rem;
      line-height: 1.2;
      font-weight: bold;
      max-width: 700px;
      background: linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    
    .features-heading a {
      color: #FF4820;
      text-decoration: none;
      font-weight: 500;
    }
    
    .features-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
    }
    
    .feature-card {
      padding: 2rem;
    }
    
    .feature-title {
      margin-bottom: 1.5rem;
    }
    
    .line {
      width: 38px;
      height: 3px;
      background: linear-gradient(103.22deg, #AE67FA -13.86%, #F49867 99.55%);
      margin-bottom: 0.5rem;
    }
    
    .feature-title h3 {
      font-size: 1.5rem;
      font-weight: bold;
      color: white;
    }
    
    .feature-description p {
      color: #81AFDD;
      font-size: 1rem;
      line-height: 1.6;
    }
    
    @media (max-width: 992px) {
      .features-header {
        flex-direction: column;
        gap: 1rem;
      }
      
      .features-heading {
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
      }
      
      .features-heading h1 {
        font-size: 2rem;
      }
      
      .features-container {
        grid-template-columns: 1fr;
      }
    }
    
    @media (max-width: 1200px) and (min-width: 993px) {
      .features-container {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  `,
  ],
})
export class FeaturesComponent {
  features: Feature[] = [
    {
      title: "Chatbots",
      description: "We so opinion friends me message as delight. Whole front do of plate heard oh ought.",
    },
    {
      title: "Knowledgebase",
      description:
        "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments.",
    },
    {
      title: "Education",
      description:
        "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments.",
    },
  ]
}


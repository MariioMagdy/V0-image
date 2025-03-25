import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"

@Component({
  selector: "app-footer",
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-heading">
          <h1>Do you want to step in to the future before others</h1>
          <button>Request Early Access</button>
        </div>
        
        <div class="footer-content">
          <div class="footer-logo">
            <h2>GPT-3</h2>
            <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
          </div>
          
          <div class="footer-links">
            <div class="footer-link-group">
              <h4>Links</h4>
              <a href="#">Overons</a>
              <a href="#">Social Media</a>
              <a href="#">Counters</a>
              <a href="#">Contact</a>
            </div>
            
            <div class="footer-link-group">
              <h4>Company</h4>
              <a href="#">Terms & Conditions</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Contact</a>
            </div>
            
            <div class="footer-link-group">
              <h4>Get in touch</h4>
              <a href="#">Crechterwoord K12 182 DK Alknjkcb</a>
              <a href="#">085-132567</a>
              <a href="#">info&#64;payme.net</a>
            </div>
          </div>
        </div>
        
        <div class="footer-copyright">
          <p>© 2023 GPT-3. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `,
  styles: [
    `
    .footer {
      padding: 4rem 0 2rem;
      background: #031B34;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }
    
    .footer-heading {
      text-align: center;
      margin-bottom: 4rem;
    }
    
    .footer-heading h1 {
      font-size: 3rem;
      line-height: 1.2;
      font-weight: bold;
      max-width: 800px;
      margin: 0 auto 2rem;
      background: linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    
    .footer-heading button {
      background: transparent;
      color: white;
      border: 1px solid white;
      padding: 1rem 2rem;
      font-size: 1rem;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    
    .footer-heading button:hover {
      background: white;
      color: #031B34;
    }
    
    .footer-content {
      display: flex;
      justify-content: space-between;
      margin-bottom: 3rem;
    }
    
    .footer-logo {
      max-width: 250px;
    }
    
    .footer-logo h2 {
      font-size: 2.5rem;
      font-weight: bold;
      color: white;
      margin-bottom: 1rem;
    }
    
    .footer-logo p {
      color: white;
      font-size: 0.875rem;
    }
    
    .footer-links {
      display: flex;
      gap: 4rem;
    }
    
    .footer-link-group {
      display: flex;
      flex-direction: column;
    }
    
    .footer-link-group h4 {
      color: white;
      font-size: 1rem;
      font-weight: bold;
      margin-bottom: 1.5rem;
    }
    
    .footer-link-group a {
      color: white;
      text-decoration: none;
      font-size: 0.875rem;
      margin-bottom: 1rem;
    }
    
    .footer-copyright {
      text-align: center;
      border-top: 1px solid #81AFDD;
      padding-top: 2rem;
    }
    
    .footer-copyright p {
      color: white;
      font-size: 0.875rem;
    }
    
    @media (max-width: 992px) {
      .footer-content {
        flex-direction: column;
        gap: 3rem;
      }
      
      .footer-links {
        flex-direction: column;
        gap: 2rem;
      }
      
      .footer-heading h1 {
        font-size: 2rem;
      }
    }
  `,
  ],
})
export class FooterComponent {}


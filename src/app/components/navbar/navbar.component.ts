import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"

@Component({
  selector: "app-navbar",
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="navbar">
      <div class="container">
        <div class="logo">GPT-3</div>
        <div class="nav-links" [class.active]="isMenuOpen">
          <a href="#home">Home</a>
          <a href="#what-is-gpt">What is GPT?</a>
          <a href="#open-ai">Open AI</a>
          <a href="#case-studies">Case Studies</a>
          <a href="#library">Library</a>
        </div>
        <div class="auth-buttons">
          <button class="sign-in">Sign in</button>
          <button class="sign-up">Sign up</button>
        </div>
        <div class="menu-button" (click)="toggleMenu()">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  `,
  styles: [
    `
    .navbar {
      padding: 1.5rem 0;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .logo {
      font-size: 1.5rem;
      font-weight: bold;
      color: white;
    }
    
    .nav-links {
      display: flex;
      gap: 2rem;
    }
    
    .nav-links a {
      color: white;
      text-decoration: none;
      font-size: 1rem;
      transition: color 0.3s;
    }
    
    .nav-links a:hover {
      color: #FF4820;
    }
    
    .auth-buttons {
      display: flex;
      gap: 1rem;
    }
    
    .sign-in {
      background: transparent;
      border: none;
      color: white;
      cursor: pointer;
      font-size: 1rem;
    }
    
    .sign-up {
      background: #FF4820;
      color: white;
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 5px;
      cursor: pointer;
      font-size: 1rem;
    }
    
    .menu-button {
      display: none;
      flex-direction: column;
      gap: 5px;
      cursor: pointer;
    }
    
    .menu-button span {
      width: 25px;
      height: 3px;
      background-color: white;
    }
    
    @media (max-width: 768px) {
      .nav-links {
        display: none;
      }
      
      .nav-links.active {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 80px;
        left: 0;
        right: 0;
        background-color: #031B34;
        padding: 2rem;
        z-index: 10;
      }
      
      .auth-buttons {
        display: none;
      }
      
      .menu-button {
        display: flex;
      }
    }
  `,
  ],
})
export class NavbarComponent {
  isMenuOpen = false

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen
  }
}


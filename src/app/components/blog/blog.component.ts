import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"

interface BlogPost {
  date: string
  title: string
  image: string
}

@Component({
  selector: "app-blog",
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="blog" id="library">
      <div class="container">
        <div class="blog-heading">
          <h1>A lot is happening, We are blogging about it.</h1>
        </div>
        
        <div class="blog-container">
          <div class="blog-card" *ngFor="let post of blogPosts; let i = index" [class.featured]="i === 0">
            <div class="blog-image">
              <img [src]="post.image" alt="Blog Post">
            </div>
            <div class="blog-content">
              <div class="blog-date">{{ post.date }}</div>
              <h3>{{ post.title }}</h3>
              <a href="#">Read Full Article</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
    .blog {
      padding: 4rem 0;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }
    
    .blog-heading {
      margin-bottom: 4rem;
    }
    
    .blog-heading h1 {
      font-size: 3.5rem;
      line-height: 1.2;
      font-weight: bold;
      max-width: 700px;
      background: linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    
    .blog-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
    }
    
    .blog-card {
      background: #042C54;
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    
    .featured {
      grid-column: span 1;
      grid-row: span 2;
    }
    
    .blog-image {
      width: 100%;
    }
    
    .blog-image img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }
    
    .featured .blog-image img {
      height: 300px;
    }
    
    .blog-content {
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      flex: 1;
    }
    
    .blog-date {
      font-size: 0.75rem;
      color: white;
      margin-bottom: 1rem;
    }
    
    .blog-content h3 {
      font-size: 1.25rem;
      font-weight: bold;
      color: white;
      margin-bottom: 1rem;
      flex: 1;
    }
    
    .blog-content a {
      color: white;
      text-decoration: none;
      font-size: 0.875rem;
    }
    
    @media (max-width: 992px) {
      .blog-container {
        grid-template-columns: 1fr;
      }
      
      .featured {
        grid-column: span 1;
        grid-row: span 1;
      }
      
      .blog-heading h1 {
        font-size: 2.5rem;
      }
    }
    
    @media (max-width: 1200px) and (min-width: 993px) {
      .blog-container {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  `,
  ],
})
export class BlogComponent {
  blogPosts: BlogPost[] = [
    {
      date: "Sep 26, 2023",
      title: "GPT-3 and Open AI is the future. Let us explore how it is?",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      date: "Sep 20, 2023",
      title: "The possibilities of AI are beyond your imagination",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      date: "Sep 15, 2023",
      title: "How AI is transforming the way we work and live",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      date: "Sep 10, 2023",
      title: "The ethical considerations of artificial intelligence",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      date: "Sep 5, 2023",
      title: "Building smarter applications with GPT-3",
      image: "/placeholder.svg?height=200&width=400",
    },
  ]
}


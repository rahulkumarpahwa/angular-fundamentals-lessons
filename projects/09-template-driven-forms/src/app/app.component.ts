import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <article>
      <h1>Blog Post</h1>
      <section>
        <label for="title">Post Title</label>
        <!-- add the input -->
         <input type="text" [(ngModel)]="title" id="title">

        <label for="body">Post Body</label>
        <!-- add the textarea -->
         <textarea [(ngModel)]="body"  id="body"></textarea>
      </section>
      <section>
        <p>Display title : {{title}}</p>
        <p>Display value : {{body}} </p>
      </section>
    </article>
  `,
  imports: [FormsModule]
})
export class AppComponent {
  title = '09-template-driven-forms';
  body: string = "";
}

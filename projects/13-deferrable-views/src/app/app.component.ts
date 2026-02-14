import { Component } from '@angular/core';
import { PostsComponent } from './posts/posts.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PostsComponent],
  template: `
    <section class="container">
      <h1>Deferrable Views Example</h1>
      <button #loadPosts6>Load Posts Hover</button>
      @defer (on hover(loadPosts6)) {
      <app-posts />
      } @loading(after 500ms; minimum 1s) {
        <p>Loading.....</p>
      } @error {
        <p>Oh! Error Happened!</p>
      } @placeholder(minimum 500ms) {
        <p>This is the placeholder. this will be shown unless we load the data via hover with the button.</p>
      }
    </section>


      <section class="container">
      <h1>Deferrable Views Example</h1>
      <button #loadPosts5>Load Posts Interaction</button>
      @defer (on interaction(loadPosts5)) {
      <app-posts />
      } @loading {
        <p>Loading.....</p>
      } @error {
        <p>Oh! Error Happened!</p>
      } @placeholder {
        <p>This is the placeholder. this will be shown unless we load the data via interaction with the button.</p>
      }
    </section>


      <section class="container">
      <h1>Deferrable Views Example</h1>
      <button #loadPosts4>Load Posts ViewPort</button>
      @defer (on viewport(loadPosts4)) {
      <app-posts />
      } @loading {
        <p>Loading.....</p>
      } @error {
        <p>Oh! Error Happened!</p>
      } @placeholder {
        <p>This is the placeholder. this will be shown unless we load the data via interaction with the button.</p>
      }
    </section>



    <section class="container">
      <h1>Deferrable Views Example</h1>
      <button #loadPosts3>Load Posts Timer</button>
      @defer (on timer(10ms)) {
      <app-posts />
      } @loading {
        <p>Loading.....</p>
      } @error {
        <p>Oh! Error Happened!</p>
      } @placeholder {
        <p>This is the placeholder. this will be shown unless we load the data via interaction with the button.</p>
      }
    </section>




    <section class="container">
      <h1>Deferrable Views Example</h1>
      <button #loadPosts2>Load Posts Immediate</button>
      @defer (on immediate) {
      <app-posts />
      } @loading {
        <p>Loading.....</p>
      } @error {
        <p>Oh! Error Happened!</p>
      } @placeholder {
        <p>This is the placeholder. this will be shown unless we load the data via interaction with the button.</p>
      }
    </section>

    <section class="container">
      <h1>Deferrable Views Example</h1>
      <button #loadPosts1>Load Posts Idle</button>
      @defer (on idle) {
      <app-posts />
      } @loading {
        <p>Loading.....</p>
      } @error {
        <p>Oh! Error Happened!</p>
      } @placeholder {
        <p>This is the placeholder. this will be shown unless we load the data via interaction with the button.</p>
      }
    </section>


     
  `,
})
export class AppComponent { }

import { Component, OnInit } from '@angular/core';
import { Blog } from '../shared/blog.model';
import { BlogService } from '../shared/blog.service';
import { Subscription } from 'rxjs/Subscription';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { slideIn } from '../shared/animations/slide-in.animation';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  animations: [slideIn]
})
export class IndexComponent implements OnInit {
  blogsObservable: Observable<any[]>;
  errorMessage: string = '';
  constructor(private blogService: BlogService) { }
  
  ngOnInit() {
      if(navigator.onLine) {
        this.blogsObservable = this.blogService.getBlogs();
      } else {
        this.errorMessage = 'Please check network connection';
      }
   
  }



}

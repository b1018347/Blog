import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params, Router } from '@angular/router';
import { Blog } from '../shared/blog.model';
import { BlogService } from '../shared/blog.service';
import { Subscription } from 'rxjs/Subscription';
import { AngularFireDatabase, snapshotChanges } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { slideIn } from '../shared/animations/slide-in.animation';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css'],
  animations: [slideIn]

})
export class ShowComponent implements OnInit {
  id: string;
  blogObservable: Observable<any[]>;

  blogSubscription: Subscription;
  constructor(private route: ActivatedRoute,
              private blogService: BlogService,
              private db: AngularFireDatabase,
              private router: Router,
              public authService: AuthService ) { }

  ngOnInit() {
  
    this.route.params.subscribe
      (
        (params: Params) => {
          this.id = params['id'];
          this.blogObservable = this.blogService.getBlog(this.id);
          this.blogService.setBlogKey(this.id);
        }
      )
  }

  onDeleteBlog() {
    this.blogService.deleteBlog();
    this.router.navigate(['/']);
    
    
  }



}

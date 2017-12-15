import { Component, OnInit } from '@angular/core';
import { Blog } from '../shared/blog.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BlogService } from '../shared/blog.service';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { slideIn } from '../shared/animations/slide-in.animation';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  animations: [slideIn]
})
export class EditComponent implements OnInit {
  id: string;
  blogObservable: Observable<any[]>;
  constructor(private route: ActivatedRoute,
              private blogService: BlogService,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe
      (
        (params: Params) => {
          this.id = params['id'];
          this.blogObservable = this.blogService.getBlog(this.id);
      }
    )
  }


  onSubmit(form: NgForm) {
    const edited = new Blog(
      this.id,
      form.value.title,
      form.value.created,
      form.value.image,
      form.value.body,
      form.value.deleted
    );
    this.blogService.editBlog(this.id, edited);
    this.router.navigate(['/']);


  }

}

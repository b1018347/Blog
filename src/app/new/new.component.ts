import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Blog } from '../shared/blog.model';
import { BlogService } from '../shared/blog.service';
import { Router } from '@angular/router';
import { slideIn } from '../shared/animations/slide-in.animation';
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
  animations: [slideIn]
})
export class NewComponent implements OnInit {

  constructor(private blogService: BlogService,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    if(form.valid) {
      const newBlog = new Blog("", form.value.title, new Date, form.value.image, form.value.body, false);
      this.blogService.createNewBlog(newBlog);
      this.router.navigate(['/']);
    }
  }

}

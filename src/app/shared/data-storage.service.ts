import { Injectable } from '@angular/core';
import { BlogService } from './blog.service';
import { HttpClient } from '@angular/common/http';
import { Blog } from './blog.model';
import { AuthService } from '../auth/auth.service';
import { AngularFireDatabase, snapshotChanges } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataStorageService {
    private blogs;
    key: string;
    constructor(private http: HttpClient,
                private authService: AuthService,
                private db: AngularFireDatabase) {}

    storeBlog(blog: Blog) {
        const token = this.authService.getToken();
        return this.http.post('https://ng-blog-9afda.firebaseio.com/blogs.json?auth=' + token, blog);
    }

    getBlogs() {
       return this.db.list('/blogs', ref => ref.orderByChild('deleted').equalTo(false)).valueChanges();
    }

    getBlog(id: string) {
        return this.db.list(
            '/blogs', ref => ref.orderByChild('id').equalTo(id)
          )
          .valueChanges();
    }

    setKey(id: string) {
        this.db.list('/blogs', ref => ref.orderByChild('id').equalTo(id)).snapshotChanges().subscribe(
            (data) => {
                this.key = data[0].key;
            }
        );
    }
    editBlog(id: string, editedBlog: Blog) {
        this.db.object("/blogs/" + this.key).update(editedBlog); 
    }

    deleteBlog() {
        this.db.object("/blogs/"+this.key).remove();
    }
}
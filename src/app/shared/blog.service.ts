import { Blog } from "./blog.model";
import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs/Subject";
import { DataStorageService } from "./data-storage.service";
@Injectable()
export class BlogService {
    blogs: Blog[] = [];
    blogsUpdated = new Subject<Blog[]>();
    constructor(private http: HttpClient,
                private dataService: DataStorageService,
                private db: AngularFireDatabase) {
        
    }
    setBlogs(blogs: Blog[]) {
        this.blogs = blogs;
        this.blogsUpdated.next(this.blogs);
    }
    getBlogs() {
        return this.dataService.getBlogs();
    }

    getBlog(id: string) {
        return this.dataService.getBlog(id);
    }
    
     
    editBlog(id: string, editedBlog: Blog) {
        this.dataService.editBlog(id, editedBlog);
    }

    deleteBlog() {
        this.dataService.deleteBlog();
    }

    createNewBlog(blog: Blog) {
        blog.id = this.newGuid();
        this.dataService.storeBlog(blog)
            .subscribe(
                (data: any) => {
                    console.log(data);
                }
            );
    }

    setBlogKey(id: string) {
        this.dataService.setKey(id);
    }

    newGuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
            return v.toString(16);
        });
    }

    
}
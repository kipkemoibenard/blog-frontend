import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NewsService } from '../../services/news.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-post-news',
  templateUrl: './post-news.component.html',
  styleUrls: ['./post-news.component.css']
})
export class PostNewsComponent implements OnInit, OnDestroy{
  postNewsForm!: FormGroup;
  tags: string[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private newsService: NewsService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.createPostNewsForm();
    
  }

  ngOnDestroy(): void {
    
  }

  createPostNewsForm() {
    this.postNewsForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      postedBy: ['', Validators.required],
      image: [''],
    });
  }

  addTags(event: any) {
    const value = (event.value || '').trim();
    if(value) {
      this.tags.push(value)
    }

    event.chipInput!.clear();
  }

  removeTags(tag:any) {
    const index = this.tags.indexOf(tag);

    if(index >= 0){
      this.tags.splice(index,1)
    }
  }

  postNews() {
    const data = this.postNewsForm.value
    data.tags = this.tags
    this.newsService.postNews(data).subscribe((res) => {
      if(res) {
        this.snackBar.open('News posted succesfully!', 'Close', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top'
        });
      }
    }, (error) => {
      this.snackBar.open('Error occurred while posting news!', 'Close', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top'
      });
    });
  }

}

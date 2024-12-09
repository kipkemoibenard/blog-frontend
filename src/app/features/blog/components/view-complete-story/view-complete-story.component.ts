import { Component, OnDestroy, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommentService } from '../../services/comment.service';

// This component views news by ID
@Component({
  selector: 'app-view-complete-story',
  templateUrl: './view-complete-story.component.html',
  styleUrls: ['./view-complete-story.component.css']
})
export class ViewCompleteStoryComponent implements OnInit, OnDestroy {
  newsId!: number;
  postData: any;
  commentForm!: FormGroup;
  comments: any;

  constructor(
    private newsService: NewsService,
    private snackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private commentService: CommentService
  ) {}

  ngOnInit(): void {
    this.getParams();
    this.createCommentForm();
    this.getAllCommentsperNewsByNewsId();
  }

  ngOnDestroy(): void {
    
  }

  getParams() {
    this.newsId = this.activatedRoute.snapshot.params['id']
    if(this.newsId) {
      this.getNewsById();
    }
  }

  createCommentForm() {
    this.commentForm = this.fb.group({
      author: ['', Validators.required],
      commentText: ['', Validators.required]
    });
  }

  publishComment() {
    const author = this.commentForm.get('author')?.value;
    const commentText = this.commentForm.get('commentText')?.value;

    this.commentService.createComment(this.newsId, author, commentText).subscribe((res) => {
      if(res) {
        this.snackBar.open('Comment added successfully!', 'Close', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top'
        });
        this.getAllCommentsperNewsByNewsId();
        this.commentForm.reset();
      }
    }, (error) => {
      this.snackBar.open('Error occurred while publishing comment!', 'Close', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top'
      });
    });
  }

  getNewsById() {
    this.newsService.getNewsById(this.newsId).subscribe((res) => {
      this.postData = res;
    }, (error) => {
      this.snackBar.open('Error occurred while fetching news!', 'Close', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top'
      });
    });
  }

  getAllCommentsperNewsByNewsId() {
    this.commentService.getAllCommentsperNewsByNewsId(this.newsId).subscribe((res) => {
      // this.comments = res;
      this.comments = res.sort((a: { commentDate: string | number | Date; }, b: { commentDate: string | number | Date; }) => new Date(b.commentDate).getTime() - new Date(a.commentDate).getTime());
    }, (error) => {
      this.snackBar.open('Error occurred getting comments', 'Close', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top'
      });
    })
  }

  likeNews() {
    this.newsService.likeNewsById(this.newsId).subscribe((res) => {
      if(res) {
        this.snackBar.open('Post liked successfully', 'Close', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top'
        });
        this.getNewsById();
      }
    }, (error) => {
      this.snackBar.open('Error occurred! Try again', 'Close', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top'
      });
    });
  }

}

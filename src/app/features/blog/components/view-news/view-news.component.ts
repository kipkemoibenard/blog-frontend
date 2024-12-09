import { Component, OnDestroy, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-view-news',
  templateUrl: './view-news.component.html',
  styleUrls: ['./view-news.component.css']
})
export class ViewNewsComponent implements OnInit, OnDestroy{
  allNews: any;

  constructor(
    private newsService: NewsService,
    private snackBar: MatSnackBar
  ) {} 

  ngOnInit(): void {
    this.getAllNews();
  }

  ngOnDestroy(): void {
    
  }

  getAllNews() {
    this.newsService.getAllNews().subscribe((res) => {
      this.allNews = res;
    }, (error) => {
      this.snackBar.open('Error occurred while fetching news!', 'Close', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top'
      });
    });
  }

}

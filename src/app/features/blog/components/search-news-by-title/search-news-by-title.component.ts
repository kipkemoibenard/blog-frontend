import { Component, OnDestroy, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-search-news-by-title',
  templateUrl: './search-news-by-title.component.html',
  styleUrls: ['./search-news-by-title.component.css']
})
export class SearchNewsByTitleComponent implements OnInit, OnDestroy {
  result: any = []
  title: any = '';

  constructor(
    private newsService: NewsService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    
  }

  searchByTitle() {
    this.newsService.searchNewsByTitle(this.title).subscribe((res) => {
      this.result = res;
    }, (error) => {
      this.snackBar.open('Error occurred while searching news!', 'Close', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top'
      });
    })
  }
 
}

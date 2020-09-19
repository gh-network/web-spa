import {Component, Input} from '@angular/core';
import {NewsFeedPublication} from '../../../../modules/gateway-api';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.sass']
})
export class NewsListComponent {

  @Input()
  public news: NewsFeedPublication[];

  constructor() { }

}
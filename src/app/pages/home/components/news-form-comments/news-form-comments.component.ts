import {Component, EventEmitter, Output, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NewsFeedPublication, NewsFeedService} from '../../../../modules/gateway-api';

@Component({
  selector: 'app-news-form-comments',
  templateUrl: './news-form-comments.component.html',
  styleUrls: ['./news-form-comments.component.scss']
})
export class NewsFormCommentsComponent {
  public form: FormGroup;

  @Input()
  public publication: NewsFeedPublication;
  @Output()
  public published = new EventEmitter<NewsFeedPublication>();


  constructor(private fb: FormBuilder,
              private newsFeedService: NewsFeedService) {
      this.form = fb.group({
        content: ['', [Validators.required]]
      });
    }

  public formSubmitted(): void {
    if (!this.form.valid) {
      return;
    }

    this.newsFeedService.newsFeedPublicationIdCommentPost(
      this.publication.id, {content: this.form.get('content').value})
    .subscribe(resp => {
      this.form.reset();
      this.published.emit(resp);
    });
  }
}

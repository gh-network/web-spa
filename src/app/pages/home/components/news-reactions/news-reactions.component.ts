import { ReactionButtonEnum, ReactionsEnum } from './../../entities/reactions.enum';
import { Component, Input } from '@angular/core';
import { NewsFeedPublication, NewsFeedService, ReactionType} from '../../../../modules/gateway-api';

@Component({
  selector: 'app-news-reactions',
  templateUrl: './news-reactions.component.html',
  styleUrls: ['./news-reactions.component.scss']
})
export class ReactionsComponent {

  hide = true;

  constructor(private newsFeedService: NewsFeedService) { }

  @Input()
  public publication: NewsFeedPublication;

  public addReaction(reaction: ReactionType): void {
    this.newsFeedService.newsFeedPublicationIdReactionPost(this.publication.id, {reaction})
    .subscribe(resp => {
      this.publication.reactions.reactions = resp.reactions;
      this.publication.reactions.totalCount = resp.totalCount;
      this.publication.reactions.user = resp.user;
    });
  }

  public deleteReaction(): void {
    this.newsFeedService.newsFeedPublicationIdReactionDelete(this.publication.id)
    .subscribe(resp => {
      this.publication.reactions.reactions = resp.reactions;
      this.publication.reactions.totalCount = resp.totalCount;
      this.publication.reactions.user = resp.user;
    });
  }

  public get availableReactions() {
    return [0, 1, 2, 3, 4, 5].map(v => { return {index: v, url: ReactionButtonEnum[v]} });
  }

  public get userReaction() {
    if (this.publication.reactions.user == null) {
      return;
    }
    return ReactionButtonEnum[this.publication.reactions.user.type]
  }

  public hidden(): void {
    if (this.hide === true){
      setTimeout(() => {this.hide = false; }, 300);
    }
    else {
      setTimeout(() => {this.hide = true; }, 600);
    }
  }
}

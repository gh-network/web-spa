import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NewsListComponent} from "./components/news-list/news-list.component";
import {NewsItemComponent} from "./components/news-item/news-item.component";
import {NewsFormCommentsComponent} from "./components/news-form-comments/news-form-comments.component";
import {ReactionsComponent} from "./components/news-reactions/news-reactions.component";
import {PublicationTotalsComponent} from "./components/publication-totals/publication-totals.component";
import {NewsCommentsComponent} from "./components/news-comments/news-comments.component";
import {PublicationActionsComponent} from "./components/publication-actions/publication-actions.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatCardModule} from "@angular/material/card";
import {MatDialogModule} from "@angular/material/dialog";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatDividerModule} from "@angular/material/divider";
import {MatMenuModule} from "@angular/material/menu";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    NewsListComponent,
    NewsItemComponent,
    NewsFormCommentsComponent,
    ReactionsComponent,
    PublicationTotalsComponent,
    NewsCommentsComponent,
    PublicationActionsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    MatMenuModule
  ],
  exports: [
    NewsListComponent,
    NewsItemComponent,
    NewsFormCommentsComponent,
    ReactionsComponent,
    PublicationTotalsComponent,
    NewsCommentsComponent,
    PublicationActionsComponent
  ]
})
export class NewsListModule { }

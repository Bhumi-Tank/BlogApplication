import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArticleService } from '../../services/article.service';
import { ArticleStatus, IArticleInfo } from 'src/app/models/articleInfo';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {
  createArticleForm: FormGroup;
  statusValue: any;
  article: IArticleInfo = {
    id: 0,
    title: '',
    author: '',
    content: '',
    status: 0,
    publishedDate: '',
    creationDate: ''
  };

  constructor(private formBuilder: FormBuilder, private articleService: ArticleService) {
    this.createArticleForm = this.formBuilder.group({});
  }

  ngOnInit(): void {
    this.createArticleForm = this.formBuilder.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      content: ['', Validators.required],
      publishedDate: [''],
      creationDate: [''],
      articleStatus: ['', Validators.required]
    })
  }

  onSubmit() {
    this.statusValue = this.createArticleForm.controls['articleStatus'].value == 'Draft' ? ArticleStatus.draft : ArticleStatus.publish;
    this.article = {
      id: 0,
      title: this.createArticleForm.controls['title'].value,
      author: this.createArticleForm.controls['author'].value,
      content: this.createArticleForm.controls['content'].value,
      status: this.statusValue,
      publishedDate: "2023-08-28T10:13:43.013Z",
      creationDate: "2023-08-28T10:13:43.013Z"
    }
    this.articleService.addArticle(this.article).subscribe(res => {
      console.log(res);
    })
  }

  getSelectedValue(event: any) {
    console.log(event.target.value);
  }
}


import { Component, OnInit } from '@angular/core';
import {ArticleService } from '../../services/article.service';
import { NgForm} from '@angular/forms';
import { Article } from 'src/app/models/article';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
  providers:[ArticleService ]
})
export class ArticlesComponent implements OnInit {
  
  constructor(public articleService: ArticleService) { }

  ngOnInit(): void {
    this.getArti();
  }
  resetForm(form?:NgForm){
    if(form){
      form.reset();
      this.articleService.selectArt=new Article();
    }
}
addArt(form :NgForm){
  if(form.value._id){
  this.articleService.postArticles(form.value)
  .subscribe(res=>{this.resetForm(form);
  this.getArti();});}
  else{
    this.articleService.postArticles(form.value).subscribe((res) => {
      this.getArti();
      this.resetForm(form);
    });
  }
}

updateArticle(art: Article) {
  this.articleService.selectArt = art;
}

deleteEmployee(_id: string, form: NgForm) {
  if (confirm("Are you sure you want to delete it?")) {
    this.articleService.deleteArticle(_id).subscribe((res) => {
      this.getArti();
      this.resetForm(form);
    });
  }
}
getArti(){   
  this.articleService.getArticles()
  .subscribe(res=>{this.articleService.articles=res as Article[];
  console.log(res)});
                               }
}

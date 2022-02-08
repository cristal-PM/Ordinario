import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  selectArt: Article;
  readonly url: string;
  articles:Article[];
  constructor(private http : HttpClient) { 
    this.selectArt = new Article();
   this.url='http://localhost:3000/api/articles';
  this.articles=[];
  }
  getArticles(){
    return this.http.get<Article[]>(this.url);   
  }
  postArticles(art:Article){return this.http.post(this.url,art);}
  putArticles(art:Article){return this.http.put(this.url+`/${art._id}`,art);}
  deleteArticle(_id:string){return this.http.delete(this.url+`/${_id}`);}
}

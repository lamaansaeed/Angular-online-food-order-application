import { Injectable } from '@angular/core';
import { sample_foods, sample_tags } from 'src/data';
import { Food } from '../shared/model/Food';
import { Tag } from '../shared/model/Tag';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FOODS_URL, FOOD_BY_SEARCH_URL,FOODS_TAGS_URL,FOOD_BY_TAG_URL,FOOD_BY_ID_URL } from '../shared/constants/url';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private httpClient:HttpClient) { }
  getAll():Observable<Food[]>{
    return this.httpClient.get<Food[]>(FOODS_URL)
  }
  getAllFoodBySearchTerm(searchTerm:string){
    return this.httpClient.get<Food[]>(FOOD_BY_SEARCH_URL+searchTerm)
  }
//Get all tag
  getAllTags():Observable<Tag[]>{
    return this.httpClient.get<Tag[]>(FOODS_TAGS_URL)
  }
  // Get food by Tags
   getAllFoodByTag(tag:string):Observable<Food[]>{
    return tag === "ALL"?this.getAll():this.httpClient.get<Food[]>(FOOD_BY_TAG_URL+tag)
  }
  //get food by id
  getFoodById(foodId:string):Observable <Food>{
    return this.httpClient.get<Food>(FOOD_BY_ID_URL +foodId)
  }
}

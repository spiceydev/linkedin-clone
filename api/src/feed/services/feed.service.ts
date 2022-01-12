import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable, from } from 'rxjs';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { FeedPostEntity } from '../models/post.entity';
import { FeedPost } from '../models/post.interface';

@Injectable()
export class FeedService {
  constructor(
    @InjectRepository(FeedPostEntity)
    private readonly feedPostRepository: Repository<FeedPostEntity>,
  ) { }

  create(feedPost: FeedPost): Observable<FeedPost> {
    return from(this.feedPostRepository.save(feedPost));
  }

  findAllPosts(): Observable<FeedPost[]> {
    return from(this.feedPostRepository.find());
  }

  findPosts(take = 10, skip = 0): Observable<FeedPost[]> {
    return from(
      this.feedPostRepository.findAndCount({ take, skip })
        .then(([posts]) => {
          return <FeedPost[]>posts
        }));
  }

  findById(id: number): Observable<FeedPost> {
    return from(this.feedPostRepository.findOne(id));
  }

  updatePost(id: number, feedPost: FeedPost): Observable<UpdateResult> {
    return from(this.feedPostRepository.update(id, feedPost));
  }

  deletePost(id: number): Observable<DeleteResult> {
    return from(this.feedPostRepository.delete(id));
  }
}

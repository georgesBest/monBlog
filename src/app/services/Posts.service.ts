export class PostsService {
  posts = [
    {
      'title'  : 'Mon premier post',
      'content'  : 'Mon premier post bla bkla bka bka bka bka bkabka ',
      'loveIts'  : 1,
      'dontLoveIts'  : 2,
      'created_at' : new Date(),
    
    },
    {
      'title'  : 'Mon 2ieme post',
      'content'  : 'Mon 2ieme post blo blo blo blo blo blob',
      'loveIts'  : 2,
      'dontLoveIts'  : 3,
      'created_at' : new Date(),
    
    },
    {
      'title'  : 'Mon 3ieme post',
      'content'  : 'Mon 3ieme post bli bli blib blib bib blib bi ib',
      'loveIts'  : 3,
      'dontLoveIts'  : 4,
      'created_at' : new Date(),
    
    },
  ];


  getPostByIndex(i){
        return this.posts[i];
      }
}
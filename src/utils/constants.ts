export const POSTS_PER_PAGE = 10;

/* eslint no-unused-vars: 0 */
// there was a error like this: «'id_asc' is defined but never used»
// and this error is a natural disaster
// I spent a lot of time trying to figure out how to fix this
// but all I can do now is just turn off eslint
// ...or install yet another bunch of eslist packages
export enum Sorting {
  id_asc = 'id_asc',
  id_desc = 'id_desc',
  title_asc = 'title_asc',
  title_desc = 'title_desc',
  body_asc = 'body_asc',
  body_desc = 'body_desc',
}

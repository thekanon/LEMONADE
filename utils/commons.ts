import type { IPost } from '@/types';
// 최근 본 글을 Local Storage에 저장하는 함수
export function saveRecentPost(post: IPost) {
  const maxRecentPosts = 5;
  const recentPosts: IPost[] = JSON.parse(
    localStorage.getItem('recentPosts') || '[]',
  );
  const updatedRecentPosts = [
    post,
    ...recentPosts.filter(p => p.id !== post.id),
  ].slice(0, maxRecentPosts);
  localStorage.setItem('recentPosts', JSON.stringify(updatedRecentPosts));
}

// Local Storage에서 최근 본 글 목록을 로드하는 함수
export function loadRecentPosts(): IPost[] {
  return JSON.parse(localStorage.getItem('recentPosts') || '[]');
}

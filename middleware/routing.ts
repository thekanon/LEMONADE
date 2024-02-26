export default defineNuxtRouteMiddleware((to, _) => {
  // console.log('to', to.path);

  if (to.path === '/') {
    return navigateTo('/viewPosts');
  }
  // console.log(to.params, to.path);
  // if (isPopupVisible.value && shouldClosePopup(to, from)) {
  //   closePopup();
  //   next(false); // 라우팅을 취소하거나, 수정하지 않음
  // } else {
  //   next(); // 다음 라우팅으로 진행
  // }
});

window.onload = function () {
   const windowWidth = document.documentElement.clientWidth;
   const currentTab = document.querySelector('a#current-tab');
   const chatSidebarContentContainer = document.querySelector('.chat-sidebar__content-container');
   const chat = document.querySelector('.chat');
   const chatSidebar = document.querySelector('.chat-sidebar');
   const chatContent = document.querySelector('.chat-content');
   const btnArray = document.querySelectorAll('.header__btn--special');

   currentTab.addEventListener('click', function () {
      chatSidebarContentContainer.style.height = 'initial'; // 100%
      chatSidebarContentContainer.style.flexGrow = 'initial'; // 1
      chat.style.flexDirection = 'column-reverse'; // initial
      chatSidebar.style.flexBasis = 'initial'; // 100%
      chatContent.style.overflow = 'hidden'; // initial
   });

   if (windowWidth < 1000) {
      btnArray.forEach(function (elem) {
         elem.addEventListener('click', function () {
            chatSidebarContentContainer.style.height = '100%';
            chatSidebarContentContainer.style.flexGrow = '1';
            chat.style.flexDirection = 'initial';
            chatSidebar.style.flexBasis = '100%';
            chatContent.style.overflow = 'initial';
         });
      });
   }
};
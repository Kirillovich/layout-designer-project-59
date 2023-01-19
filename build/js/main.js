window.onload = function () {
   // history.pushState('', document.title, window.location.pathname);

   const href = location.href;

   const widthWindow = document.documentElement.clientWidth;

   const idChats = document.querySelector('#chats.chat-sidebar__content');
   const idContacts = document.querySelector('#contacts.chat-sidebar__content');
   const idProfile = document.querySelector('#profile.chat-sidebar__content');
   const currentChat = document.querySelector('.chat-content');
   const chatSidebar = document.querySelector('.chat-sidebar');
   const chat = document.querySelector('.chat');

   if (location.hash === '#contacts') {
      idContacts.style.display = 'flex';
      idChats.style.display = 'none';
      idProfile.style.display = 'none';
   } else if (location.hash === '') {
      idChats.style.display = 'flex';
   } else if (location.hash === '#profile') {
      idProfile.style.display = 'flex';
      idChats.style.display = 'none';
      idContacts.style.display = 'none';
   } else if (location.hash === '#chats') {
      idContacts.style.display = 'none';
   }

   if (location.hash === '' && href.substring(href.length - 9) !== 'chat.html') {
      idProfile.style.display = 'none';
      idChats.style.display = 'none';
   }

   if ((location.hash === '#current-chat' || href.substring(href.length - 9) === 'chat.html') && widthWindow < 1000) {
      currentChat.style.display = 'flex';
      currentChat.style.height = '0';
      chatSidebar.style.flexBasis = '0';
      chat.style.flexDirection = 'column-reverse';

      idProfile.style.display = 'none';
      idChats.style.display = 'none';
      idContacts.style.display = 'none';
   } else {
      chatSidebar.style.flexBasis = '100%';
      chat.style.flexDirection = 'initial';
      currentChat.style.height = 'initial';
   }

   window.addEventListener('hashchange', hashchange);

   function hashchange() {
      const hash = location.hash;

      if (hash === '#contacts') {
         idContacts.style.display = 'flex';
         idChats.style.display = 'none';
         idProfile.style.display = 'none';
         widthWindow < 1000 ? (currentChat.style.display = 'none') : null;
      } else if (hash === '#chats') {
         idChats.style.display = 'flex';
         idContacts.style.display = 'none';
         idProfile.style.display = 'none';
         widthWindow < 1000 ? (currentChat.style.display = 'none') : null;
      } else if (hash === '#profile') {
         idProfile.style.display = 'flex';
         idChats.style.display = 'none';
         idContacts.style.display = 'none';
         widthWindow < 1000 ? (currentChat.style.display = 'none') : null;
      }

      if (hash === '#current-chat') {
         currentChat.style.display = 'flex';
         currentChat.style.height = '0';
         chatSidebar.style.flexBasis = '0';
         chat.style.flexDirection = 'column-reverse';

         idProfile.style.display = 'none';
         idChats.style.display = 'none';
         idContacts.style.display = 'none';
      } else {
         chatSidebar.style.flexBasis = '100%';
         chat.style.flexDirection = 'initial';
         currentChat.style.height = 'initial';
      }
   }
};

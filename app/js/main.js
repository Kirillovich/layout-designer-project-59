window.onload = function () {
   const idContacts = document.querySelector('#contacts.chat-sidebar__content');
   const idChats = document.querySelector('#chats.chat-sidebar__content');
   const idProfile = document.querySelector('#profile.chat-sidebar__content');

   const linkContacts = document.querySelector('a[href="#contacts"]');
   const linkChats = document.querySelector('a[href="#chats"]');
   const linkProfile = document.querySelector('a[href="#profile"]');

   const idAll = document.querySelectorAll('.chat-sidebar__content');
   const chatContent = document.querySelector('.chat-content');
   const chatSidebar = document.querySelector('.chat-sidebar');
   const chat = document.querySelector('.chat');

   linkContacts.addEventListener('click', function() {
      idContacts.style.display = 'flex';
      idChats.style.display = 'none';
      idProfile.style.display = 'none';
   });

   linkChats.addEventListener('click', function() {
      idContacts.style.display = 'none';
      idChats.style.display = 'flex';
      idProfile.style.display = 'none';
   });

   linkProfile.addEventListener('click', function() {
      idContacts.style.display = 'none';
      idChats.style.display = 'none';
      idProfile.style.display = 'flex';
   });

   const makeIdVisible = () => {
      // for (id of idAll) {
      //    if (`#${id.getAttribute('id')}` === location.hash) {
      //       id.style.display = 'flex';
      //    } else {
      //       id.style.display = 'none';
      //    }
      // }

      if (document.documentElement.clientWidth < 1000) {
         if (location.hash === '#current-chat') {
            chatContent.style.display = 'flex';
            chat.style.flexDirection = 'column-reverse';
            chatSidebar.style.flexBasis = '0';
            chatContent.style.height = '0';
         } else {
            chatContent.style.display = 'none';
         }
      }

      if (document.documentElement.clientWidth > 1000) {
         chat.style.flexDirection = 'initial';
         chatSidebar.style.flexBasis = '464px';
         chatContent.style.height = 'initial';
      }

      // window.addEventListener(
      //    'resize',
      //    function (event) {
      //       const widthWindow = document.documentElement.clientWidth;
      //    },
      //    true,
      // );
   };

   makeIdVisible();

   // if (location.pathname === '/' && location.hash === '') {
   //    idContacts.style.display = 'flex';
   // }

   // if (location.pathname === '/chat.html' && location.hash === '') {
   //    idChats.style.display = 'flex';
   // }

   window.addEventListener('hashchange', hashchange);

   function hashchange() {
      makeIdVisible();
   }
};

// history.pushState('', document.title, window.location.pathname);

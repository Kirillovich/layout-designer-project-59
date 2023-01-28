window.onload = function () {
   const contacts = document.querySelector('#contacts');
   const chats = document.querySelector('#chats');
   const currentChat = document.querySelector('#current-chat');
   const linksMenu = document.querySelectorAll('.nav-link');
   const allBlocks = document.querySelectorAll('.tab-pane');
   // const profile = document.querySelector('#profile');

   const hash = location.hash;
   const pathname = location.pathname;
   const contentBlock = hash === '' ? '' : document.querySelector(hash);

   if (hash && pathname === '/') {
      contentBlock.style.order = '-1';
      contentBlock.style.display = 'flex';
   } else {
      contacts.style.display = 'flex';
   }

   if (hash && pathname !== '/') {
      contentBlock.style.order = '-1';
      contentBlock.style.display = 'flex';
   } else {
      chats.style.display = 'flex';
   }

   for (elem of linksMenu) {
      elem.addEventListener('click', function() {
         for (content of allBlocks) {
            content.style.display = 'flex';
         }
      });
   }

};

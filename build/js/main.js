window.onload = function () {
   const contacts = document.querySelector('#contacts');
   const linksMenu = document.querySelectorAll('.nav-link');
   const allBlocks = document.querySelectorAll('.tab-pane');
   // const chats = document.querySelector('#chats');
   // const profile = document.querySelector('#profile');

   const hash = location.hash;
   const contentBlock = hash === '' ? '' : document.querySelector(hash);

   if (hash) {
      contentBlock.style.order = '-1';
      contentBlock.style.display = 'flex';
   } else {
      contacts.style.display = 'flex';
   }

   for (elem of linksMenu) {
      elem.addEventListener('click', function() {
         for (content of allBlocks) {
            content.style.display = 'flex';
         }
      });
   }

};

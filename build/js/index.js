window.onload = function () {
   const contacts = document.querySelector('#contacts');
   const chats = document.querySelector('#chats');
   const profile = document.querySelector('#profile');
   const buttons = document.querySelectorAll('button');
   const pathname = location.pathname;
   const hash = location.hash;

   for (btn of buttons) {
      btn.addEventListener('click', function () {
         const id = this.getAttribute('id');

         window.location.href = pathname + `#${id}`;

         if (id === 'contacts-tab') {
            contacts.style.display = 'flex';
            chats.style.display = 'none';
            profile.style.display = 'none';
         } else if (id === 'chats-tab') {
            chats.style.display = 'flex';
            chats.style.flexDirection = 'column';
            chats.style.opacity = '1';
            contacts.style.display = 'none';
            profile.style.display = 'none';
         } else if (id === 'profile-tab') {
            profile.style.display = 'flex';
            profile.style.flexDirection = 'column';
            profile.style.opacity = '1';
            contacts.style.display = 'none';
            chats.style.display = 'none';
         }

      });
   }

   if (hash === '#contacts-tab') {
      contacts.style.display = 'flex';
      chats.style.display = 'none';
      profile.style.display = 'none';
   } else if (hash === '#chats-tab') {
      chats.style.display = 'flex';
      chats.style.flexDirection = 'column';
      chats.style.opacity = '1';
      contacts.style.display = 'none';
      profile.style.display = 'none';
   } else if (hash === '#profile-tab') {
      profile.style.display = 'flex';
      profile.style.flexDirection = 'column';
      profile.style.opacity = '1';
      contacts.style.display = 'none';
      chats.style.display = 'none';
   }
};

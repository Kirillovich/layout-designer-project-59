window.onload = function () {
   const contacts = document.querySelector('#contacts');
   const chats = document.querySelector('#chats');
   const profile = document.querySelector('#profile');
   const buttons = document.querySelectorAll('button');
   const pathname = location.pathname;
   const hash = location.hash;

   if (hash.includes('chats')) {
      chats.classList.add('active');
      chats.classList.add('show');

      contacts.classList.remove('active');
      contacts.classList.remove('show');
      profile.classList.remove('active');
      profile.classList.remove('show');
   } else if (hash.includes('contacts') || hash === '') {
      contacts.classList.add('active');
      contacts.classList.add('show');

      chats.classList.remove('active');
      chats.classList.remove('show');
      profile.classList.remove('active');
      profile.classList.remove('show');
   } else if (hash.includes('profile')) {
      profile.classList.add('active');
      profile.classList.add('show');

      chats.classList.remove('active');
      chats.classList.remove('show');
      contacts.classList.remove('active');
      contacts.classList.remove('show');
   }

   // for (btn of buttons) {
   //    btn.addEventListener('click', function () {
   //       const id = this.getAttribute('id');

   //       window.location.href = pathname + `#${id}`;

   //       // if (id === 'contacts-tab') {
   //       //    contacts.style.display = 'flex';
   //       //    chats.style.display = 'none';
   //       //    profile.style.display = 'none';
   //       // } else 
         
   //       if (id === 'chats-tab') {
   //          chats.classList.add('active show');
   //          // chats.style.display = 'flex';
   //          // chats.style.flexDirection = 'column';
   //          // chats.style.opacity = '1';
   //          // contacts.style.display = 'none';
   //          // profile.style.display = 'none';
   //       } else if (id === 'profile-tab') {
   //          // profile.style.display = 'flex';
   //          // profile.style.flexDirection = 'column';
   //          // profile.style.opacity = '1';
   //          // contacts.style.display = 'none';
   //          // chats.style.display = 'none';
   //       }

   //    });
   // }

   // if (hash === '#contacts-tab') {
   //    contacts.style.display = 'flex';
   //    chats.style.display = 'none';
   //    profile.style.display = 'none';
   // } else if (hash === '#chats-tab') {
   //    chats.style.display = 'flex';
   //    chats.style.flexDirection = 'column';
   //    chats.style.opacity = '1';
   //    contacts.style.display = 'none';
   //    profile.style.display = 'none';
   // } else if (hash === '#profile-tab') {
   //    profile.style.display = 'flex';
   //    profile.style.flexDirection = 'column';
   //    profile.style.opacity = '1';
   //    contacts.style.display = 'none';
   //    chats.style.display = 'none';
   // }
};

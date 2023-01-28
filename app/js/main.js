window.onload = function () {
   // const contacts = document.querySelector('#contacts');
   // const chats = document.querySelector('#chats');
   // const profile = document.querySelector('#profile');

   const hash = location.hash;
   const contentBlock = document.querySelector(hash);

   contentBlock.style.order = '-1';
};

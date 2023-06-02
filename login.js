const loginButton=document.querySelector('#loginButton');
const select=document.querySelector('#selectUser');

let currentUser=localStorage.getItem('user');
if(currentUser!=null)
{
  window.location.href = './calendar.html';
}

function login()
{
   localStorage.setItem('user',select.value);
   window.location.href = './calendar.html';
}
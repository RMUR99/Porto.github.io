const navLinksElements = document.querySelectorAll('nav-link'); 
const windowPathname = window.location.pathname;


navLinksElements.forEach(navLinkEL => {
    const navLinkPathname = new URL(navLinkEL.href).pathname;
if ( windowPathname === navLinkPathname || (windowPathname === '/index.html' && navLinkPathname === '/' ) ) {

    navLinkEL.classList.add('active'); 

}

     
});


function redirectToLink() {
    window.location.href = "https://dev.to/rmur99/bashing-as-a-junior-developer-gone-right--2l3i"; // Replace with your desired link
  }


  function redirectToLinkSecond() {
    window.location.href = "https://github.com/RMUR99/Color-Random-Generator"; // Replace with your desired link
  }

  function redirectToLinkThird() {
    window.location.href = "https://github.com/RMUR99/GPT"; // Replace with your desired link
  }


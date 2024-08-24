fetch("/templates/navbar.html")
  .then((res) => res.text())
  .then((text) => {
    let oldelem = document.querySelector("script#replace_with_navbar");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem, oldelem);
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent immediate navigation
        const contentWrapper = document.querySelector('.content-wrapper');
        contentWrapper.classList.add('fade-out'); // Start fade-out animation
        const destination = this.href; // Capture the destination URL
        setTimeout(function() {
            window.location.href = destination; // Navigate after fade-out
        }, 500); // Match this duration to your fade-out animation duration
    });
});

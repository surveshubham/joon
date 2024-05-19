// Load navbar component
fetch("components/navbar.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("navbar-placeholder").innerHTML = data;
});


fetch("components/footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer-placeholder").innerHTML = data;
});

function udatePerPage() {
    const width = window.innerWidth;
    let page = 1
    if (width < 640) {
        return page;
    } else if (width > 640) {
        return page + 1;
    } 
}

// Initialize Splide slider
document.addEventListener('DOMContentLoaded', function() {
    var splide = new Splide( '.splide', {
        type: 'loop',
                perPage:  udatePerPage(),
                focus: "center",
                autoplay: true,
                gap: '30px', 
                arrows: false, 
                
                padding: {
                  right: '10px', // Set the right padding
                  left: '10px'   // Set the left padding
              },
      } );
      
      splide.mount();

      udatePerPage()
      window.addEventListener('resize', function() {
        splide.options = { perPage: udatePerPage() };
    });


});

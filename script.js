
function adjustPageSize() { // navbar disalign ho rha tha, so maincontent ko center me rkhega 
    const width = window.innerWidth;
    const mainContent = document.querySelector('.container'); 
  
    mainContent.style.transform = "scale(1)";
    mainContent.style.transformOrigin = "top center"; 
  // necessary conditions jo bhi assignment me hai
    if (width > 992 && width <= 1600) {
      mainContent.style.transform = "scale(0.9)"; 
    } else if (width >= 700 && width <= 767) {
      mainContent.style.transform = "scale(0.8)"; 
    } else if (width >= 600 && width < 700) {
      mainContent.style.transform = "scale(0.75)"; 
    } else if (width <= 600) {
      mainContent.style.transform = "scale(0.5)"; 
    }
  }
  
  // page load and reload krne se function call hoga
  window.addEventListener("load", adjustPageSize);
  window.addEventListener("resize", adjustPageSize);
  
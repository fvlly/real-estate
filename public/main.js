  
const toggleBtn = document.querySelector(".toggle-menu");
const navItems = document.querySelector(".navbar-items");

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("active");
   navItems.classList.toggle('open')
});

// toggle filter sections

const filterBox = document.querySelector(".filter-container")
const sortBox = document.querySelector(".sort-container")

filterBox.addEventListener("click",()=>{
  document.querySelector('.filter-options').classList.toggle('show')

})
sortBox.addEventListener("click",()=>{
  document.querySelector('.sorting-options').classList.toggle('show')

})
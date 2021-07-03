"use strict";

{

 /* let logo = document.querySelector(".logo");
  logo.addEventListener("click", function() {
    location.reload();
  })*/


  let scrollpos = window.scrollY;
  let menu_hidden = document.querySelector(".menu");
  let nav = document.querySelector(".menu_links");
  let nav_height = nav.offsetHeight;

  const add_class_on_scroll = () => menu_hidden.classList.add("fade-in");
  const remove_class_on_scroll = () => menu_hidden.classList.remove("fade-in");

  window.addEventListener("scroll", function () {
    scrollpos = window.scrollY;

    if (scrollpos >= nav_height) {
      add_class_on_scroll();
    } else {
      remove_class_on_scroll();
    }
  });

}

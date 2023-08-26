"use strict";

const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// -----------validation email---------------------
function email_check() {
  let email = document.getElementById("email").value;
  let info_class = document.querySelector(".hidden-info");
  let check_email_class = document.querySelector(".check-form");
  console.log(info_class);
  if (email.match(regex)) {
    info_class.classList.remove("hidden");

    check_email_class.classList.add("hidden");
  } else {
    document.querySelector(".message").textContent = `Email không hộp lệ!`;
    document.querySelector(".message").style.color = "red";
  }
}
// ----------Show more infomation job----------------------
function view(class_name, key_check) {
  let info_more = document.querySelector(`.${class_name}`);
  let button_name = document.querySelectorAll(".view");
  let content_tag = button_name[key_check - 1].textContent;

  content_tag.trim() === "View more"
    ? (button_name[key_check - 1].textContent = "View less")
    : (button_name[key_check - 1].textContent = "View more");

  info_more.classList.toggle("hidden");
}

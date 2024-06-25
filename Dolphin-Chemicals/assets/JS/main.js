// content change
const p_btns = document.querySelector(".w-links");
const p_btn = document.querySelectorAll(".w-link");
const p_img_elem = document.querySelectorAll(".img-overlay");

// Add "w-text-not-active" class to all image elements except the first one
p_img_elem.forEach((curElem, index) => {
  if (index !== 0) {
    curElem.classList.add("w-text-not-active");
  }
});

p_btns.addEventListener("click", (e) => {
  const p_btn_clicked = e.target.closest(".w-link");
  if (!p_btn_clicked) return; // If clicked outside .w-link, exit

  const btn_num = p_btn_clicked.dataset.btnNum;

  p_btn.forEach((curElem) => {
    if (curElem !== p_btn_clicked) {
      curElem.classList.remove("w-link-active");
    }
  });

  p_btn_clicked.classList.add("w-link-active");
  p_btn_clicked.classList.add("w-link-active");

  p_img_elem.forEach((curElem) => {
    if (curElem.classList.contains(`w-link--${btn_num}`)) {
      curElem.classList.remove("w-text-not-active");
    } else {
      curElem.classList.add("w-text-not-active");
    }
  });
});

// form validation

function validateForm() {
  var name1 = document.getElementById("name1").value;
  var email1 = document.getElementById("email1").value;
  var message1 = document.getElementById("message1").value;

  if (!name1 || !email1 || !message1) {
    alert("All fields are required!");
    return false;
  }

  // Simple email validation (more sophisticated validation can be added)
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email1)) {
    alert("Please enter a valid email address.");
    return false;
  }
  return true;
}

// contact form validation
function validateForm1() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  if (!name || !email || !message) {
    alert("All fields are required!");
    return false;
  }

  // Simple email validation (more sophisticated validation can be added)
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return false;
  }
  return true;
}

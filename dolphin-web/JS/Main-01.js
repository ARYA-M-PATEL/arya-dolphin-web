// ***working - portion***

// const p_btns = document.querySelector(".w-links");
// const p_btn = document.querySelectorAll(".w-link");
// const p_img_elem = document.querySelectorAll(".img-overlay");

// p_btns.addEventListener("click", (e) => {
//   const p_btn_clicked = e.target;
//   console.log(p_btn_clicked);

//   p_btn.forEach((curElem) => curElem.classList.remove("w-link-active"));

//   p_btn_clicked.classList.add("w-link-active");

//   const btn_num = p_btn_clicked.dataset.btnNum;
//   console.log(btn_num);

//   const img_active = document.querySelectorAll(`.w-link--${btn_num}`);

//   p_img_elem.forEach((curElem) => curElem.classList.add("w-text-not-active"));

//   img_active.forEach((curElem) =>
//     curElem.classList.remove("w-text-not-active")
//   );
// });

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

// const p_btns = document.querySelector(".w-links");
// const p_btn = document.querySelectorAll(".w-link");
// const p_img_elem = document.querySelectorAll(".img-overlay");

// p_btns.addEventListener("click", (e) => {
//   const p_btn_clicked = e.target.closest(".w-link");
//   if (!p_btn_clicked) return; // If clicked outside .w-link, exit

//   const btn_num = p_btn_clicked.dataset.btnNum;

//   p_btn.forEach((curElem) => {
//     if (curElem !== p_btn_clicked) {
//       curElem.classList.remove("w-link-active");
//     }
//   });

//   p_btn_clicked.classList.add("w-link-active");

//   p_img_elem.forEach((curElem) => {
//     if (curElem.classList.contains(`w-link--${btn_num}`)) {
//       curElem.classList.remove("w-text-not-active");
//     } else {
//       curElem.classList.add("w-text-not-active");
//     }
//   });
// });

// *** Our Section ***

// ********* our section ******

// const about_us1 = document.querySelector(".our-links");
// const about_us2 = document.querySelector(".our-link");
// const our_content = document.querySelector(".our-content");

// our_content.forEach((curElem, index) => {
//   if (index !== 0) {
//     curElem.classList.add("our-text-not-active");
//   }
// });

// about_us1.addEventListener("click", (e) => {
//   const our_btn_clicked = e.target.closest(".our-link");
//   if (!our_btn_clicked) return;

//   const btn_num1 = our_btn_clicked.dataset.btnNum;

//   about_us2.forEach((curElem) => {
//     if (curElem !== our_btn_clicked) {
//       curElem.classList.remove.add("our-link-active");
//     }
//   });

//   our_btn_clicked.classList.add("our-link-active");

//   our_content.forEach((curElem) => {
//     if (curElem.classList.contains(`our-link--${btn_num1}`)) {
//       curElem.classList.remove("our-text-not-active");
//     } else {
//       curElem.classList.add("our-text-not-active");
//     }
//   });
// });

// ****** home page vedio ******
var video = document.getElementById("myVideo"); // Increase speed by settingplaybackRate property video.
// playbackRate = 1; // This will play the video at
// twice the normal speed

// ************ Navbar *************
const container = document.querySelector(".container__testimonial");
const testimonial = document.querySelector(".testimonial");
const image = document.querySelector(".user__image");
const username = document.querySelector(".username");
const role = document.querySelector(".role");

const testimonials = [
  {
    name: "Jane Doe",
    position: "Data Analyst",
    photo: "https://randomuser.me/api/portraits/women/22.jpg",
    text: "onec molestie, augue vitae posuere accumsan, arcu lectus tempor nisl, at consequat quam ex sit amet metus. Vivamus ac vestibulum augue. Nullam sit amet pulvinar arcu, vel tincidunt augue. In id nisl lacus. Aenean odio eros, vestibulum eget lacus eu, varius interdum metus. Sed eleifend mattis convallis. Praesent id feugiat tellus.",
  },

  {
    name: "Elen Page",
    position: "Engineer",
    photo: "https://randomuser.me/api/portraits/women/15.jpg",
    text: "Proin lobortis porttitor aliquam. Phasellus ut quam aliquam, dignissim felis ut, bibendum leo. Duis in urna tristique, pharetra elit in, vehicula nisi. Mauris sed commodo sapien. Nunc ac turpis imperdiet, consequat libero in, convallis erat. Sed eu urna lectus. Nullam quis commodo dui.",
  },

  {
    name: "Alanah Ruby",
    position: "Project Manager",
    photo: "https://randomuser.me/api/portraits/women/10.jpg",
    text: "Etiam dignissim ante in faucibus sagittis. Quisque justo massa, pharetra ac neque non, cursus viverra ante. Sed sed finibus massa. Phasellus vitae libero vitae ligula hendrerit consequat. Proin nisl dui, mattis sed vestibulum eget, auctor ac erat. Etiam molestie, quam non ultrices laoreet, dolor massa hendrerit libero, at ultricies libero mauris nec nunc. Suspendisse potenti. Curabitur nulla nisl, hendrerit nec lacus eu, dapibus semper nunc. Aliquam arcu velit, vulputate id est eget, cursus sodales ante. Curabitur vulputate, risus in interdum rhoncus, orci sapien dignissim leo, non tristique quam ipsum id ex.",
  },
];

let idx = 1;

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx];

  testimonial.innerHTML = text;
  image.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;

  idx++;

  if (idx > testimonials.length - 1) {
    idx = 0;
  }
}

setInterval(updateTestimonial, 10000);

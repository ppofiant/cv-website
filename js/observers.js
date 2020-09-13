const header = document.querySelector(".hamburger div");
const sectionOne = document.querySelector(".wrapper-home");

const sectionOneOptions = {
  rootMargin: "-50px 0px 0px 0px",
};

const sectionOneObserver = new IntersectionObserver(function (
  entries,
  sectionOneObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

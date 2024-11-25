const rowsList = document.querySelectorAll(".row");
const cardTipsList = document.querySelectorAll(".card-tips");
const smallMenu = document.querySelector(".nav-list-small");
const btnCloseMenu = document.querySelector(".icon-close");
const btnOpenMenu = document.querySelector(".icon-menu");
const navSmallItems = document.querySelectorAll(".nav-item-small");

navSmallItems.forEach((item) =>
  item.addEventListener("click", () => {
    smallMenu.style.display = "none";
  })
);

btnCloseMenu.addEventListener("click", () => {
  smallMenu.style.display = "none";
});

btnOpenMenu.addEventListener("click", () => {
  smallMenu.style.display = "flex";
});

const rowsOberver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    entry.target.classList.toggle("show-row", entry.isIntersecting);
    if (entry.isIntersecting) rowsOberver.unobserve(entry.target);
  });
});

const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("show-card-tips", entry.isIntersecting);
    if (entry.isIntersecting) cardObserver.unobserve(entry.target);
  });
});

rowsList.forEach((row) => rowsOberver.observe(row));
cardTipsList.forEach((card) => cardObserver.observe(card));

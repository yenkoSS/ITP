const rowsList = document.querySelectorAll(".row");
const cardTipsList = document.querySelectorAll(".card-tips");

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

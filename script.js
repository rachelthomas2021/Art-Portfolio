const menu = document.querySelector(".menu-btn");

const nav = document.querySelector(".nav");


if (menu) {

  menu.addEventListener("click", () => {

    nav.classList.toggle("open");

  });

}


document
  .querySelectorAll(".nav a")
  .forEach(link => {

    link.addEventListener("click", () => {

      nav?.classList.remove("open");

    });

  });


document
  .querySelectorAll("#year")
  .forEach(element => {

    element.textContent =
      new Date().getFullYear();

  });


const collectionCarousel =
  document.querySelector("[data-collection-carousel]");


if (collectionCarousel) {

  const collections = [
    {
      title: "Dark & Moody",
      pattern: "pattern-dark",
      href: "Collections/dark-and-moody.html"
    },
    {
      title: "Pretty Little Things",
      pattern: "pattern-pretty",
      href: "Collections/pretty-little-things.html"
    },
    {
      title: "Geo Metric",
      pattern: "pattern-geometric",
      href: "Collections/geometric.html"
    },
    {
      title: "Floral Stories",
      pattern: "pattern-floral",
      href: "Collections/floral.html"
    },
    {
      title: "Holiday All Year",
      pattern: "pattern-holiday",
      href: "Collections/holiday.html"
    }
  ];

  const title = collectionCarousel.querySelector(
    "[data-carousel-title]"
  );

  const link = collectionCarousel.querySelector(
    "[data-carousel-link]"
  );

  const position = collectionCarousel.querySelector(
    "[data-carousel-position]"
  );

  const patterns = collections.map(collection => collection.pattern);
  let activeIndex = 0;

  const showCollection = index => {

    activeIndex =
      (index + collections.length) % collections.length;

    const collection = collections[activeIndex];

    collectionCarousel.classList.remove(...patterns);
    collectionCarousel.classList.add(collection.pattern);
    collectionCarousel.setAttribute(
      "aria-label",
      `Featured collection preview: ${collection.title}`
    );

    title.textContent = collection.title;
    link.href = collection.href;
    position.textContent =
      `${String(activeIndex + 1).padStart(2, "0")} / ${String(collections.length).padStart(2, "0")}`;
  };

  collectionCarousel
    .querySelector("[data-carousel-previous]")
    .addEventListener("click", () => {
      showCollection(activeIndex - 1);
    });

  collectionCarousel
    .querySelector("[data-carousel-next]")
    .addEventListener("click", () => {
      showCollection(activeIndex + 1);
    });

}
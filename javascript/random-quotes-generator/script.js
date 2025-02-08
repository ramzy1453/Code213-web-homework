const nextBtn = document.querySelector(".next-button");
const quoteEl = document.querySelector(".quote");
const authorEl = document.querySelector(".author");

let currentQuote = 0;

let quotes = [
  {
    title: "Allah yanser ghaza",
    author: "ramzy",
  },
  {
    title: "salam alikom cv",
    author: "wassim",
  },
  {
    title: "hello everyone",
    author: "massi",
  },
  {
    title: "slm",
    author: "unknown",
  },
];

nextBtn.addEventListener("click", function whenClick() {
  currentQuote++;
  if (currentQuote === 4) {
    currentQuote = 0;
  }
  quoteEl.textContent = quotes[currentQuote].title;
  authorEl.textContent = quotes[currentQuote].author;
});

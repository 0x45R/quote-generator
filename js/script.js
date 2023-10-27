const refreshButton = document.querySelector(".js-refresh-button")
const quoteLabel = document.querySelector('.js-quote-label');
const authorLabel = document.querySelector('.js-author-label');
const quoteContainer = document.querySelector('.quote-container');

async function getQuote(){
  const response = await fetch("https://api.quotable.io/random", { headers: {"Content-Type":"application/json"}})
  return response.json()
}

const fetchQuote = () => {
  quoteContainer.classList.add("hidden")
  refreshButton.classList.add("loading")
  getQuote().then(assignQuote)
}

const assignQuote = (data) => {
  console.log(data);
  const {author, content} = data;
  quoteLabel.innerText = content;
  authorLabel.innerText = author;
  refreshButton.classList.remove("loading")
  quoteContainer.classList.remove("hidden")
}

fetchQuote();

refreshButton.addEventListener("click", ()=>{
  if(!refreshButton.classList.contains("loading")) fetchQuote();
})

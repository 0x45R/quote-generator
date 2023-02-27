const refreshButton = document.querySelector(".generate-new-quote")
const quoteText = document.querySelector('.quote-text')
const quoteAuthor = document.querySelector(".quote-author")

async function getQuote(){
  const response = await fetch("https://api.quotable.io/random", { headers: {"Content-Type":"application/json"}})
  return response.json()
}

refreshButton.addEventListener("click", ()=>{
  refreshButton.classList.add("loading")
  getQuote().then((data)=>{
      quoteText.innerText = data.content
      quoteAuthor.innerText = data.author
      refreshButton.classList.remove("loading")
    }
  )
})


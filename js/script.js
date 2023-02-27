const refreshButton = document.querySelector(".generate-new-quote")
const main = document.querySelector(".quote-container")
const quoteText = document.createElement("p")
const quoteAuthor = document.createElement("p")


async function getQuote(){
  const response = await fetch("https://api.quotable.io/random", { headers: {"Content-Type":"application/json"}})
  return response.json()
}
getQuote().then((data)=>{
    main.appendChild(quoteText)
    quoteText.classList.add('quote-text')

    main.appendChild(quoteAuthor)
    quoteAuthor.classList.add("quote-author")
    
    refreshButton.classList.remove("loading")

    quoteText.innerText = data.content
    quoteAuthor.innerText = data.author
  }
)
refreshButton.addEventListener("click", ()=>{
  refreshButton.classList.add("loading")
  getQuote().then((data)=>{
      quoteText.innerText = data.content
      quoteAuthor.innerText = data.author
      refreshButton.classList.remove("loading")
    }
  )
})


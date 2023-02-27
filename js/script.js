const refreshButton = document.querySelector(".generate-new-quote")

async function getQuote(){
  const response = await fetch("https://zenquotes.io/api/random/", { headers: {"Content-Type":"application/json"}})
  return response.json()
}

refreshButton.addEventListener("click", ()=>{
  refreshButton.classList.add("loading")
  getQuote().then((data)=>{
      console.log(data);
      refreshButton.classList.remove("loading")
    }
  )
})


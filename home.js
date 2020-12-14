let realData = "";
const quotes = document.getElementById('quotes')
const author = document.getElementById('author')
const newQ = document.getElementById('newQ')
const tweet = document.getElementById('tweet')
let quoteData = ''
const getNewQuotes = (realData) => {
  let rnum = Math.floor(Math.random() * 10);
  console.log(realData[rnum].text);
  quoteData = realData[rnum]
  quotes.innerText = `${quoteData.text}`
  if(quoteData.author != null){author.innerText = `by: ${quoteData.author}`}
  else{author.innerText = 'Unknown Author'}
};
const tweetme = () => {
    let url = `https://twitter.com/intent/tweet?text=${quoteData.text}`
    window.open(url)
}
const getQuotes = async () => {
  const API = "https://type.fit/api/quotes";
  try {
    let data = await fetch(API);
    let realData = await data.json();
    getNewQuotes(realData);
    
  } catch (error) {}
};
tweet.addEventListener('click', tweetme)
/* getNewQuotes() */
newQ.addEventListener('click', getQuotes)
getQuotes();

// array
const quotes = [
    
    {
        name: 'walt disney',
        quote: '1'
    },
    {
        name: 'walt disney',
        quote: '2'
    },
    {
        name: 'walt disney',
        quote: '3'
    },
    {
        name: 'walt disney',
        quote: '4'
    },

]
const quoteBtn = document.querySelector('#quoteBtn');
const quote = document.querySelector('#quote');
const quoteAuthor = document.querySelector('#quoteAuthor');

quoteBtn.addEventListener('click', displayQuote);

function displayQuote() {
    let number = Math.floor(Math.random()*quotes.length);
    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;
}
const quotes = [{
    quote : "The road to success and the road to failure are almost exactly the same.",
    writter : "- Colin R. Davis"},
    {quote : "It is better to fail in originality than to succeed in imitation.",
    writter : "- Herman Melville"},
    {quote : "Success is walking from failure to failure with no loss of enthusiasm.",
    writter : "- Winston Churchill"},
    {quote : "All progress takes place outside the comfort zone.",
    writter : "- Michael John Bobak"},
    {quote : "Success usually comes to those who are too busy to be looking for it.",
    writter : "- Henry David Thoreau"},
    {quote : "The way to get started is to quit talking and begin doing.",
    writter : "- Walt Disney"},
    {quote : "Success seems to be connected with action. Successful people keep moving.",
    writter : "- Conrad Hilton"},
    {quote : "In order to succeed, we must first believe that we can.",
    writter : "- Nikos Kazantzakis"},
    {quote : "The only place where success comes before work is in the dictionary.",
    writter : "- Vidal Sassoon"},
];

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const pickQuote = Math.floor(Math.random()*quotes.length);

quote.innerText = quotes[pickQuote].quote;
author.innerText = quotes[pickQuote].writter;


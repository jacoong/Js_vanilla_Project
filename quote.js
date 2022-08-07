const quotes = [{
    quote : "삶이 있는 한 희망은 있다",
    writter : "-키케로"},
    {quote : "산다는것 그것은 치열한 전투이다",
    writter : "-로망로랑"},
    {quote : "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다.",
    writter : "-사무엘존슨"},
    {quote : "언제나 현재에 집중할수 있다면 행복할것이다.",
    writter : "-파울로 코엘료"},
    {quote : "진정으로 웃으려면 고통을 참아야하며 , 나아가 고통을 즐길 줄 알아야 해 ",
    writter : "-찰리 채플린"},
    {quote : "신은 용기있는자를 결코 버리지 않는다",
    writter : "-켄러"},
    {quote : "우리를 향해 열린 문을 보지 못하게 된다",
    writter : "-헬렌켈러"},];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const pickQuote = Math.floor(Math.random()*quotes.length);

quote.innerText = quotes[pickQuote].quote;
author.innerText = quotes[pickQuote].writter;


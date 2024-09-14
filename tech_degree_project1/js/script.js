/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 *  an array of quotes where you can add the quotes you like
***/

const quotes = [
  {
    quote: "IT'S OVER 9000!!!",
    source:"Prince Vegeta",
    citation:"Dragon Ball Z",
    tag:"[tv show]"
  },
  {
    quote:"I don't like sand.",
    source:"Anakin Skywalker",
    citation:"Attack of the Clones",
    year:"2002",
    tag:"[movie]"
  },
  {
    quote:"If I'm not back in five minutes, just wait longer.",
    source:"Ace Ventura",
    citation:"Ace Ventura: Pet Detective",
    year:"1994",
    tag:"[movie]"

  },
  {
    quote:"Gentlemen, you can't fight in here! This is the War Room!",
    source:"President Merkin Muffley",
    citation:"Dr. Strangelove",
    year:"1964",
    tag:"[movie]"
  },
  {
    quote:"Hail to the king, baby",
    source:"Ash Williams",
    citation:"Army of Darkness",
    year:"1992",
    tag:"[movie]"
  }
];

// This is an array of Background colors to be selected randomly.
const colors = [
  '#FF5733',  // red-orange
  '#33FF57',  // lime-green
  '#3357FF',  // blue
  '#F3FF33',  // yellow
  '#FF33A1'   // pink
];

/***
 *  function to get a random quote 
***/
function getRandomQuote(){
  const randomIndexNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndexNumber];
}

// function to get random color
function getRandomColor() {
  const randomColor = Math.floor(Math.random() * colors.length);
  return colors[randomColor];
}

/***
 * `printQuote` function displays the strings and the random quotes 
***/
function printQuote(){
  const randomQuote = getRandomQuote();
  let html = 
  `<p class="quote">"${randomQuote.quote}"</p>`;
  html += `<p class="source">${randomQuote.source}`;
  
  // add citations if they are available. 
if (randomQuote.citation){
  html += `<span class="citation"> ${randomQuote.citation}</span>`;
}
// add years if they are available
if (randomQuote.year){
  html += `<span class="year"> ${randomQuote.year}</span>`;
}

// add tag of show or movie if available 
if (randomQuote.tag){
  html += `<span class="tag">, ${randomQuote.tag}</span>`;
}  
html += `</p>`;

// display the Html in the quotebox. 
document.getElementById('quote-box').innerHTML = html;


// update to display the Background color
document.body.style.backgroundColor = getRandomColor();
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
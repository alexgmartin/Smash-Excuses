const generateBtn = document.getElementById('generateBtn');
const smashAudio = document.getElementById("smashAudio");
let quoteText = document.getElementById('quoteText');
let quoteWrapper = document.getElementById('quoteWrapper');

document.getElementById('quoteText').style.opacity = 1;

async function getQuoteData() {
  // Load google spreadsheet
  const res = await fetch('https://spreadsheets.google.com/feeds/cells/1mRVpIOEJ01YKqlWAlpPvQVn2rCSqkq9K7nKpslfhYbc/1/public/full?alt=json');
  const data = await res.json();

  // Create variable for our starting point in the JSON loop
  const rootData = data.feed.entry;
  // Create array to store quotes from column in spreadsheet
  let datas = [];

  // Loop through each quote and add quote to 'datas' array
  rootData.forEach((item) => {
    datas.push(item.content.$t);
  });

  // Display random array entry (Random quote)
  quoteText.innerHTML = datas[Math.floor(Math.random()*datas.length)];

}

// Define function to play mp3 audio. Referenced as onmouseover on generate button in html file
const playAudio = () => {
  smashAudio.play();
}

// On click, the generate button calls getQuoteData to display random quote
generateBtn.addEventListener('click', getQuoteData);



const smashAudio = document.getElementById("smashAudio"); 
let quoteText = document.getElementById('quoteText');
const generateBtn = document.getElementById('generateBtn');
let quoteWrapper = document.getElementById('quoteWrapper');

document.getElementById('quoteText').style.opacity = 1;

async function getQuoteData() {
  const res = await fetch('https://spreadsheets.google.com/feeds/cells/1mRVpIOEJ01YKqlWAlpPvQVn2rCSqkq9K7nKpslfhYbc/1/public/full?alt=json');
  const data = await res.json();
  const rootData = data.feed.entry;
  let datas = [];

  rootData.forEach((item) => {
    datas.push(item.content.$t);
  });

  quoteText.innerHTML = datas[Math.floor(Math.random()*datas.length)];

}

const playAudio = () => {
  smashAudio.play();
}

generateBtn.addEventListener('click', getQuoteData);



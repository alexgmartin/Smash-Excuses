const smash = new Audio();

smash.src = '/smash.wav';

let data = [];

async function getQuoteData() {
  const res = await fetch('https://spreadsheets.google.com/feeds/cells/1mRVpIOEJ01YKqlWAlpPvQVn2rCSqkq9K7nKpslfhYbc/1/public/full?alt=json');
  const data = await res.json();
  const rootData = data.feed.entry;
  let datas = [];

  rootData.forEach((item) => {
    datas.push(item.content.$t);
  });


  console.log(datas);

}

getQuoteData();
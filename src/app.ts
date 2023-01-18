const url: any = new URL('https://www.boredapi.com/api/activity/');

let showQuote = document.getElementById('quote') as HTMLParagraphElement;

async function getBored() { 
    const respons = await
    fetch(url);
    const data = await respons.json();
    showQuote.innerHTML = data.activity;
};

getBored();
const url: any = new URL('https://www.boredapi.com/api/activity/');

let showQuote = document.getElementById('quote') as HTMLParagraphElement;
const btn = document.getElementById('nq') as HTMLButtonElement;

btn.addEventListener('click', function(){
    async function getBored() { 
        const respons = await
        fetch(url);
        const data = await respons.json();
        showQuote.innerHTML = data.activity;
    };
    getBored();
})


'use strict';

const bats = document.querySelector('.bat');
const bowls = document.querySelector('.bowl');


const hitbtn = document.querySelector('.hit--btn');
const newbtn = document.querySelector('.new--btn');
const batimg = document.getElementById('bat--img');
const bowlimg = document.getElementById('bowl--img');
const batscoretext = document.querySelector('.batscore--text');
const bowlscoretext = document.querySelector('.bowlscore--text');
const batsmanscore = document.querySelector('.batsman-score');
const card = document.querySelector('.winnercard');
const olay = document.querySelector('.overlay');
const winnerscore = document.querySelector('.winner-score');
// const active = document.querySelector('.activeplayer');


card.classList.add('hidden');
olay.classList.add('hidden');

batimg.classList.add('hidden');
bowlimg.classList.add('hidden');

let scorecount = 0;

hitbtn.addEventListener('click', function() {
    const batvalue = (Math.trunc(Math.random() * 6) + 1);
    const bowlvalue = (Math.trunc(Math.random() * 6) + 1);
    console.log(batvalue, bowlvalue);

    batimg.src = `hand--${batvalue}.png`;
    bowlimg.src = `hand--${bowlvalue}.png`;

    batimg.classList.remove('hidden');
    bowlimg.classList.remove('hidden');


    batscoretext.textContent = batvalue;
    bowlscoretext.textContent = bowlvalue;


    if (batvalue !== bowlvalue) {
        scorecount = scorecount + batvalue;
        batsmanscore.textContent = scorecount;
    } else if (batvalue === bowlvalue) {
        card.classList.remove('hidden');
        olay.classList.remove('hidden');
        winnerscore.textContent = scorecount;
        winnerscore.style.color = 'green';
        bats.classList.toggle('activeplayer');
        bowls.classList.toggle('activeplayer');
    }
});
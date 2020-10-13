const ball = document.querySelector('img');
const input = document.querySelector('input');
const answer = document.querySelector('.answer');
const error = document.querySelector('.error');

// all answers to question
const answersArr = ['Tak!', 'Jeszcze jak!', 'Jak pan Jezus powiedzial!','Nie.', 'Zdecydowanie nie!', 'Cieżko powiedzieć...', 'Nie chcesz znać odpwoeidzi na to pytanie.', 'Moim zdaniem to nie ma tak, że dobrze albo że nie dobrze. Gdybym miał powiedzieć, co cenię w życiu najbardziej, powiedziałbym, że ludzi. Ekhm... Ludzi, którzy podali mi pomocną dłoń, kiedy sobie nie radziłem, kiedy byłem sam. I co ciekawe, to właśnie przypadkowe spotkania wpływają na nasze życie. Chodzi o to, że kiedy wyznaje się pewne wartości, nawet pozornie uniwersalne, bywa, że nie znajduje się zrozumienia, które by tak rzec, które pomaga się nam rozwijać. Ja miałem szczęście, by tak rzec, ponieważ je znalazłem. I dziękuję życiu. Dziękuję mu, życie to śpiew, życie to taniec, życie to miłość. Wielu ludzi pyta mnie o to samo, ale jak ty to robisz?, skąd czerpiesz tę radość? A ja odpowiadam, że to proste, to umiłowanie życia, to właśnie ono sprawia, że dzisiaj na przykład buduję maszyny, a jutro... kto wie, dlaczego by nie, oddam się pracy społecznej i będę ot, choćby sadzić... znaczy... marchew.'];

const shakeBall = () => {
    ball.classList.add('shake-animation');
    setTimeout(checkInput, 1000);
}

const checkInput = () => {
    if (input.value !== '' && input.value.slice(-1) === '?') {
        generateAnswer();
        error.textContent = '';
    } else if (input.value !== '' && input.value.slice(-1) !== '?') {
        error.textContent = 'Pytanie musi być zakończone znakiem "?"';
        answer.textContent = '';
    } else {
        error.textContent = 'Musisz zadać jakieś pytanie!';
        answer.textContent = '';
    }
    ball.classList.remove('shake-animation');
    
}

const generateAnswer = () => {
    const number = Math.floor(Math.random() * 8);
    answer.innerHTML = `<span>Odpowiedź:</span> ${answersArr[number]}`;
}

ball.addEventListener('click', shakeBall);

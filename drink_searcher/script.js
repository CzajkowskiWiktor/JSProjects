const search = document.querySelector('.search');
const li = document.querySelectorAll('li');

//funkcja strzałkowa, przechwytywanie tekstu z wyszukiwarki
const serachEngine = e => {
    const text = e.target.value.toLowerCase();
    // console.log(text);

    li.forEach(el => {
        if (el.textContent.toLowerCase().indexOf(text) !== -1) {
            el.style.display = 'block';
        } else {
            el.style.display = 'none';
        }
    })
};

search.addEventListener('keyup', serachEngine);
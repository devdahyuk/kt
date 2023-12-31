const showTable = (city) => {
    const table = document.getElementsByTagName('table');
    for (let i = 0; i < table.length; i++) {
        table[i].classList.add('hidden');
        if (table[i].classList.contains('visible')) {
            table[i].classList.remove('visible');
        }
    }
    const target = document.getElementById(city);
    target.classList.replace('hidden', 'visible');
}

const getPlaylistLink = () => {
    const city = document.getElementsByClassName('selector')[0].value;
    const a = document.getElementsByClassName('playlist_link');
    let result = "https://radio.bsod.kr/playlist/" + city + ".m3u";
    a[0].href = result;
}
const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const CAT_BTN = document.getElementById('change-cat');

const GET_CATS = async () => {
    try{
        const DATA = await fetch(BASE_URL);
        const JSON = await DATA.json();

        return JSON.webpurl;
    }
    catch(e) {
        console.log(e.message);
    }
};

const LOAD_IMG = async () => {
    const CAT_IMG = document.getElementById('cat');
    CAT_IMG.src = await GET_CATS();
}

CAT_BTN.addEventListener('click', LOAD_IMG);

LOAD_IMG();
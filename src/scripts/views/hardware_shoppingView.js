import * as appconstant from '../appconstant';
import {
    http
} from '../httpUtility';


export const renderProducts = (data) => {
    if (data.data) {
        data.data.forEach(d => {
            try {
                const dataString = createStringFrom(d.image.data.data);
                d.image = `data:image/png;base64,${btoa(dataString)}`;
                renderProduct(d);
            } catch (error) {
                console.log(error);
            }
        });
    }
}

export const clearList = () => {
    appconstant.elements.productlist.innerHTML = '';
}

const renderProduct = (hardware) => {
    const markup = `
        <figure class="card" style="width: 18rem;">
            <div class="card__hero">        
                <img src="${hardware.image}" alt="${hardware.productName}" class="card__img">
                </div>
                    <h2 class="card__name">${hardware.productName}</h2>
                    <p class="card__detail"><span class="emoji-left">🖥</span> ${hardware.screen}</p>
                    <p class="card__detail"><span class="emoji-left">🧮</span> ${hardware.cpu}</p>
                    <div class="card__footer">
                        <p class="card__price">${hardware.price}</p>
                        <a href="/laptop?id=${hardware._id}" class="card__link">Check it out <span class="emoji-right">👉</span></a>
            </div>
        </figure>`;
    appconstant.elements.productlist.insertAdjacentHTML('beforeend', markup);
}

const createStringFrom = (data) => {
    let binaryString;
    for (let i = 0; i < data.length; i++) {
        binaryString += String.fromCharCode(data[i]);
    }
    binaryString = binaryString.replace('undefined', ''); /** ?? */
    return binaryString;
}
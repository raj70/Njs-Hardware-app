import * as appconstant from '../appconstant';
import {
    type
} from 'os';

export const renderProducts = (data) => {
    data.forEach(d => {
        renderProduct(d);
    });
}

export const clearList = () => {
    appconstant.elements.productlist.innerHTML = '';
}
const renderProduct = (hardware) => {
    const markup = `
        <li>
            <input type="hidden" value="${hardware.id}">
            <div class="productName">
                <h1>${hardware.productName}</h1>
            </div>
        </li>
    `;
    appconstant.elements.productlist.insertAdjacentHTML('beforebegin', markup);
}
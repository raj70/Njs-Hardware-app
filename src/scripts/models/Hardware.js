import axios from 'axios';
import {
    http
} from '../httpUtility';
import * as appconstant from '../appconstant';

export default class Hardware {
    constructor(type) {
        this.type = type;
    }

    async getData() {
        if (this.type === appconstant.hardware.lap) {
            try {
                const resp = await http().get('/computers');
                this.data = resp.data;
                console.log(this.data);
            } catch (error) {
                console.log(error);
            }
        }
    }
}
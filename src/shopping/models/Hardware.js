import axios from 'axios';
import {
    http
} from '../../scripts/httpUtility';
import * as appconstant from '../../scripts/appconstant';

export default class Hardware {
    constructor(type) {
        this.type = type;
    }

    async getData() {
        if (this.type === appconstant.hardware.lap) {
            try {
                const resp = await http().get('/computers');
                this.data = resp.data;
            } catch (error) {
                console.log(error);
            }
        }
    }
}
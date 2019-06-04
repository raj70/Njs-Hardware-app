import axios from 'axios';
import * as appconstant from '../appconstant';

export default class Hardware {
    constructor(type) {
        this.type = type;
    }

    async getData() {
        if (this.type === appconstant.hardware.lap) {
            try {
                const resp = await axios.get("http://localhost:2000/api/lap");
                this.data = resp.data;
            } catch (error) {
                console.log(error);
            }
        }
    }
}
// @ts-nocheck
import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.herokuapp.com/', {
            apiKey: 'ffc273cb532e44cfa12cd68ff1624631', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;

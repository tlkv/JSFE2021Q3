import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.herokuapp.com/', {
            apiKey: 'ffc273cb532e44cfa12cd68ff1624631',
        });
    }
}

export default AppLoader;
import './main.scss';

class MainController {
    hello: string = 'Hello World main.ts';
    constructor() {
        console.log(this.hello);
    }
}

export const main: angular.IComponentOptions = {
    template: require('./main.html'),
    controller: MainController,
    bindings: {
        hello: '='
    }
};

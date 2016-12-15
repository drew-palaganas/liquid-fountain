class MainController {
    hello: string;

    constructor() {
        console.log(this);
        this.Test();
    };

    Test() {
        console.log('test');
    };
}
export const main2: angular.IComponentOptions = {
    template: require('./main2.html'),
    controller: MainController,
    bindings: {
        hello: '<',
        Test: '&'
    }
};

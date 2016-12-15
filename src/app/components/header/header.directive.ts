var template = require('./header.html');

class HeaderComponent implements  ng.IDirective {
    restrict = 'E';
    template = template;
    replace = true;

    constructor () {
        console.log('Hello from footer controller!');
    }

    static factory(): ng.IDirectiveFactory {
        const directive = () => new HeaderComponent();
        return directive;
    }
}

export default HeaderComponent;

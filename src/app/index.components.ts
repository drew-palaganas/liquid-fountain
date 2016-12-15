import HeaderComponent  from './components/header/header.directive';

export default angular.module('index.components', [])
    .directive('mainHeader', HeaderComponent.factory());


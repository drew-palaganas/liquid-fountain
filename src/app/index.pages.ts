import {main} from './pages/main/main';
import {main2} from './pages/main2/main2';

// services

// directices

export default angular.module('index.pages', [
        require('./pages/job/job.module').default.name
    ])
    .component('app', main)
    .component('main', main2);

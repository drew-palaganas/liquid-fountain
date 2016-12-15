/// <reference path="../../typings/index.d.ts" />

import '../assets/theme/main.scss';
import * as angular from 'angular';
import 'angular-ui-router';
import routesConfig from './index.routes';
export const app: string = 'Liquid-ResourcePlanner';


angular
    .module(app, [
        // plugins
        'ui.router',

        // components
        require('./index.components').default.name,

        // pages
        require('./index.pages').default.name
    ])
    .config(routesConfig);

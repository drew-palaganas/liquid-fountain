/// <reference path="../../typings/index.d.ts" />
export default routesConfig;

var pageRouteConfigs = [
    require('./pages/job/job.routes').default
];

/** @ngInject */
function routesConfig(
        $stateProvider: angular.ui.IStateProvider,
        $urlRouterProvider: angular.ui.IUrlRouterProvider,
        $locationProvider: angular.ILocationProvider
    ) {
        // $locationProvider.html5Mode(false).hashPrefix('!');
        // $locationProvider.html5Mode(true).hashPrefix('');
        $urlRouterProvider.otherwise('/');

        var provider =
            $stateProvider
                .state('app', {
                    url: '/',
                    component: 'app'
                });

        pageRouteConfigs.forEach(pageRouteConfig => pageRouteConfig(provider, $urlRouterProvider, $locationProvider));
    }

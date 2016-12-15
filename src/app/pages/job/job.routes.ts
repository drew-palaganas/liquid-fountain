export default JobRoutesConfig;

function JobRoutesConfig(
    $stateProvider: angular.ui.IStateProvider,
    $urlRouterProvider: angular.ui.IUrlRouterProvider,
    $locationProvider: angular.ILocationProvider) {

    $stateProvider
        .state('job', {
            url: '/job',
            abstract: true,
            template: '<ui-view/>'
        })
        .state('job.index', {
            url: '',
            component: 'jobList'
        })
        .state('job.create', {
            url: '/create',
            component: 'jobCreate'
        })
        .state('job.edit', {
            url: '/edit',
            component: 'jobEdit'
        });
}

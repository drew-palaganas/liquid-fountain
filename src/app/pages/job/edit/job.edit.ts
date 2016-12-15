class JobEditController {
    message: string = 'Job Edit';
}

export const JobEdit: angular.IComponentOptions = {
    template: require('./job.edit.html'),
    controller: JobEditController
};

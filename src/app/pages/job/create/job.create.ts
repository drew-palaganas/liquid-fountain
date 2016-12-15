class JobCreateController {
    message: string = 'Job Create';
}

export const JobCreate: angular.IComponentOptions = {
    template: require('./job.create.html'),
    controller: JobCreateController
};

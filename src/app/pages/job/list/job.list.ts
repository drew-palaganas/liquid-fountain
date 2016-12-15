import Job from 'core/models/jobs';

class JobListController {
    Jobs: Job[] = [];
    constructor() {
        for (var i: number = 0; i < 5; i++) {
            var _job = new Job();

            _job.Name = 'Job ' + (i + 1);
            this.Jobs.push(_job);
        }

        console.log(this);
    }
}

export const JobList: angular.IComponentOptions = {
    template: require('./job.list.html'),
    controller: JobListController
};

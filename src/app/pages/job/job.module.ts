import { JobList } from './list/job.list';
import { JobCreate } from './create/job.create';
import { JobEdit } from './edit/job.edit';

export default angular.module('job.module', [])
    .component('jobList', JobList)
    .component('jobCreate', JobCreate)
    .component('jobEdit', JobEdit);

import { InMemoryDbService } from 'angular-in-memory-web-api';

import { createTestStudents } from './test-data';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const students = createTestStudents();
        let student = students[0];

        return {
            student: student
        };
    }
}

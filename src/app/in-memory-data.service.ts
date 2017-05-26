import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDataService {

  createDb() {
    let todos = [];
    return { todos };
  }

}

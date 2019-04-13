import * as supertest from 'supertest';
import app from './App';

describe('App', (): void => {
  it('works', (): void =>
    supertest(app)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200));
});

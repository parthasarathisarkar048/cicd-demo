const request = require('supertest');
const app = require('./app');

test('GET /todos returns empty array initially', async () => {
  const res = await request(app).get('/todos');
  expect(res.statusCode).toBe(500);
  expect(res.body).toEqual([]);
});

test('POST /todos creates a todo', async () => {
  const res = await request(app)
    .post('/todos')
    .send({ text: 'Learn CI/CD' });
  expect(res.statusCode).toBe(201);
  expect(res.body.text).toBe('Learn CI/CD');
});
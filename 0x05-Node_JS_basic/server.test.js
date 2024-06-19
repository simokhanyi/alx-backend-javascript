const request = require('supertest');
const app = require('./server');

describe('GET /', () => {
    it('should return Hello Holberton School!', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('Hello Holberton School!');
    });
});

describe('GET /students', () => {
    it('should return the list of students', async () => {
        const response = await request(app).get('/students');
        expect(response.statusCode).toBe(200);
        // Add more assertions based on your expected output
    });
});

describe('GET /students/:major', () => {
    it('should return the list of students for the given major', async () => {
        const response = await request(app).get('/students/CS');
        expect(response.statusCode).toBe(200);
        // Add more assertions based on your expected output
    });

    it('should return 500 for invalid major', async () => {
        const response = await request(app).get('/students/invalid_major');
        expect(response.statusCode).toBe(500);
        expect(response.text).toBe('Major parameter must be CS or SWE');
    });
});

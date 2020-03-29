const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll( () => {
        connection.destroy();
    });

    it('shoushould be able to create a new ONG', async () => {
        const response = await request(app).post('/ongs').send({
            name: "Tiago teste",
            email: "tfbellaver@gmail.com",
            whatsapp: "123456789000",
            city: "Erechim",
            uf: "RS"
         });

         expect(response.body).toHaveProperty('id');
         expect(response.body.id).toHaveLength(8);
    });
});
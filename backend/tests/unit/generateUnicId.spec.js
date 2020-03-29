const generateUnicId = require('../../src/utils/generateUnicId');

describe('Generate Unic ID', () => {
    it('should generate an unique ID', () => {
        const id = generateUnicId();

        expect(id).toHaveLength(8);
    });
});
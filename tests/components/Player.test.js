let Player = require('../../components/Player.js');

describe('All Player Functionalities', () => {

    let player;

    beforeAll(() => {
        player = new Player();
    });

    it('Should have a health of 100', () => {
        expect(player.health).toBe(100);
    });

    it('Should have a hunger of 100', () => {
        expect(player.hunger).toBe(100);
    });

    it('Should have a water of 100', () => {
        expect(player.water).toBe(100);
    });

    it('Should have a username of test', () => {
        player.setUsername('test');

        expect(player.username).toBe('test');
    });
});
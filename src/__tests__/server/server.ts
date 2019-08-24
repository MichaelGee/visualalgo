import appServer from '@app/server';
const chai = require('chai');
import chaiHttp from 'chai-http/index';

chai.use(chaiHttp);

const request = chai.request;

describe('Server', () => {

    it('Server Side Rendered', (done) => {
        request(appServer)
            .get('/')
            .end((err, res) => {
                if (err) { console.error(err); }
                const {text} = res;
                expect(text).toMatch('Sieve of Eratosthenes');
                done();
            });

    });

    it('Get Seive', (done) => {
        request(appServer)
            .get('/prime/10')
            .end((err, res) => {
                if (err) { console.error(err); }

                const {body: { primes } } = res;

                expect(primes).toEqual([2, 3, 5, 7]);
                done();
            });
    });

    it('Get Seive Median: Double', (done) => {
        request(appServer)
            .get('/prime/10/median')
            .end((err, res) => {
                if (err) { console.error(err); }

                const {body: { median } } = res;

                expect(median).toEqual([3, 5]);
                done();
            });
    });

    it('Get Seive Median: Single', (done) => {
        request(appServer)
            .get('/prime/18/median')
            .end((err, res) => {
                if (err) { console.error(err); }

                const { body: { median } } = res;

                expect(median).toEqual([7]);
                done();
            });
    });

    it('Get Maximum sub array', (done) => {
        request(appServer)
            .post('/max_subarray')
            .send({
                items: [ 1, -3, 2, 1, -1],
            })
            .end((err, res) => {
                if (err) { console.error(err); }

                const { body: { items, max } } = res;

                expect(items).toEqual([2, 1]);
                expect(max).toEqual(3);
                done();
            });
    });

});

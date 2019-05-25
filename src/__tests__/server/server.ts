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

});

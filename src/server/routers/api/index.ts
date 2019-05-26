import * as express from 'express';

const apiRouter = express.Router();

const getPrimes = (max: number): number[] => {
    const sieve = new Array(max).fill(true);

    for (let i = 2; i < Math.sqrt(max); i++) {
        if (sieve[i]) {
            for (let j = Math.pow(i, 2); j < max; j += i) {
                sieve[j] = false;
            }
        }
    }

    return sieve.reduce((primes, isPrime, i) => {
        if (isPrime && i > 1) {
            primes.push(i);
        }

        return primes;
    }, []);
};

const getMedian = (arr: number[]): number[] => {
    const mid = Math.floor(arr.length / 2);

    if (arr.length % 2 === 0) {
        return [arr[mid - 1], arr[mid]];
    } else {
        return [arr[mid]];
    }
};

apiRouter.get('/prime/:limit', (req, res) => {
    const { limit } = req.params;
    const primes = getPrimes(Number(limit));
    res.json({ primes });
});

apiRouter.get('/prime/:limit/median', (req, res) => {
    const { limit } = req.params;
    const primes = getPrimes(Number(limit));
    const median = getMedian(primes);
    res.json({ median, primes });
});

export default apiRouter;

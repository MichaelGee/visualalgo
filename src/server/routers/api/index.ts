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

function getMaximumSubArr(arr) {
    let globalMax = arr[0];
    let localMax = arr[0];

    let startIndex = 0;
    let endIndex = arr.length - 1;

    for (let i = 1; i < arr.length - 1; i++) {
        const sum = localMax + arr[i];
        localMax = Math.max(sum, arr[i]);

        if (localMax > globalMax) {
            globalMax = localMax;

            if (globalMax === sum) {
                endIndex = i;
            } else {
                startIndex = i;
            }
        }
    }

    return { max: globalMax, items: arr.slice(startIndex, endIndex + 1) };
}

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

apiRouter.post('/max_subarray', (req, res) => {
    const { items: arr } = req.body;
    const { items, max } = getMaximumSubArr(arr);
    res.json({ items, max });
});

export default apiRouter;

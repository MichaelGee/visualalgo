import appServer from '@app/server';
import * as http from 'http';

const PORT = '3000';
const server = http.createServer(appServer);

server.listen(`${PORT}`, () => console.info(`Serving on port ${PORT}`));
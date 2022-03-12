import { app } from './app';

const server = app.listen(3333);

const { port } = server.address() as { port: number };

server.once('listening', () => console.log(`server running at: ${port}`));

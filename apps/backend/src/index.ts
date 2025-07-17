import Fastify from 'fastify';

const app = Fastify();

app.get('/', () => {
  return { hello: 'world!' };
});

const start = async () => {
  try {
    await app.listen({ port: 3000, host: '0.0.0.0' });
    console.log('🚀 Server is running on http://localhost:3000');
  } catch (e) {
    app.log.error(e);
    process.exit(1);
  }
};

start();

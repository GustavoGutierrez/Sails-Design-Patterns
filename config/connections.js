module.exports.connections = {
 mongoDb: {
    adapter: 'sails-mongo',
    host: process.env.DB_HOST, // defaults to `localhost` if omitted
    port: process.env.DB_PORT, // defaults to 27017 if omitted
    user: process.env.DB_USERNAME, // or omit if not relevant
    password: process.env.DB_PASSWORD, // or omit if not relevant
    database: process.env.DB_DATABASE // or omit if not relevant
  }
};

module.exports.connections = {
 mongoDb: {
    adapter: 'sails-mongo',
    host: 'yourhost', // defaults to `localhost` if omitted
    port: 27017, // defaults to 27017 if omitted
    user: 'yourusername', // or omit if not relevant
    password: 'yourpassword', // or omit if not relevant
    database: 'yourdatabase' // or omit if not relevant
  }
};

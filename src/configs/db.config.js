// FROM MONGODB LOCAL DATABASE
const local = {
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  db: process.env.DATABASE_NAME
}

module.exports = {
  url: `mongodb://${local.username}:${local.password}@${local.host}:${local.port}/${local.db}`,
};

// FROM MONGODB ATLAS DATABASE
// Uncomment the below code to use from srv.
// Don't forget to comment the above code when using srv.

// const srv = {
//   username: 'bensadiamed',
//   password: 'btSOSz6ZSsNM8AvZ',
//   cluster: 'air-quality-cluster.zagb4j8.mongodb.net',
// }

// module.exports = {
//   url: `mongodb+srv://${srv.username}:${srv.password}@${srv.cluster}/?retryWrites=true&w=majority`,
// };

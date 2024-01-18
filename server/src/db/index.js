const { Pool } = require("pg");
const { PGDATABASE, PGUSER, PGPASSWORD, PGHOST, PGPORT } = require('../constants')

const connectionString = `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}:${PGPORT}/${PGDATABASE}`;

const pool = new Pool({
  connectionString: connectionString,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
  end: () => pool.end(),
};

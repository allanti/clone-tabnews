import database from "infra/database.js";

async function status(request, response) {
  const updatedAt = new Date().toISOString();
  const postgresVersion = await database.query("SHOW server_version");
  const postgresMaxConnection = await database.query("SHOW max_connections;");
  const databaseName = process.env.POSTGRES_DB;
  const postgresOpenedConnections = await database.query({
    text: "SELECT COUNT(*)::int total_conexoes FROM pg_stat_activity WHERE datname = $1;",
    values: [databaseName],
  });

  response.status(200).json({
    update_at: updatedAt,
    postgres_version: postgresVersion.rows[0].server_version,
    postgres_max_connection: parseInt(
      postgresMaxConnection.rows[0].max_connections,
    ),
    postgres_opened_connections:
      postgresOpenedConnections.rows[0].total_conexoes,
  });
}

export default status;

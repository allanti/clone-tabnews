test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();
  expect(responseBody.update_at).toBeDefined();
  console.log(responseBody);

  const parseUpdatedAt = new Date(responseBody.update_at).toISOString();
  expect(responseBody.update_at).toEqual(parseUpdatedAt);

  expect(responseBody.postgres_version).toBe("16.0");
  expect(responseBody.postgres_max_connection).toBe(100);
  expect(responseBody.postgres_opened_connections).toBe(1);
});

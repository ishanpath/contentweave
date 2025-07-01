export default {
  dialect: "postgresql",
  schema: "./utils/db/schema.ts",
  out: "./drizzle",

  dbCredentials: {
    url: "postgresql://threadcraft_owner:npg_EJKFaV3Y0fwO@ep-rough-snowflake-a6mk1nej-pooler.us-west-2.aws.neon.tech/threadcraft?sslmode=require&channel_binding=require",
    connectionString:
      "postgresql://threadcraft_owner:npg_EJKFaV3Y0fwO@ep-rough-snowflake-a6mk1nej-pooler.us-west-2.aws.neon.tech/threadcraft?sslmode=require&channel_binding=require",
  },
};

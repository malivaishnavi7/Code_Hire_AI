/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: "postgresql://ai-interview-mocker_owner:npg_hubwANQe5Z3U@ep-shy-sunset-a5yk4380-pooler.us-east-2.aws.neon.tech/ai-interview-mocker?sslmode=require"
    }
  };
const notebookDbUser = process.env.NOTEBOOK_DB_USER;
const notebookDbPassword = process.env.NOTEBOOK_DB_PASSWORD;
const notebookDbName = process.env.NOTEBOOKS_DB_NAME;

console.log("Initializing: Notebooks DB User");

db = db.getSiblingDB(notebookDbName);
db.createUser({
  user: notebookDbUser,
  pwd: notebookDbPassword,
  roles: [
    {
      role: "readWrite",
      db: notebookDbName,
    },
  ],
});

console.log("Notebooks DB User created successfully");

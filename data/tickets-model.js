// DB import
const db = require('./dbConfig.js');

module.exports = {
  find,
  findById,
  add,
  remove,
  update
};

async function find(query={}) {
  const { sortby="id", sortdir="asc" } = query;

  let rows = await db("tickets").orderBy(sortby, sortdir);

  return rows;
};

function findById(id) {
  return db("tickets")
    .where({ id })
    .first();
};

async function add(ticket) {
  const [id] = await db("tickets").insert(ticket, "id");

  return findById(id);
};

async function remove(id) {
  const removed = await findById(id);

  await db("tickets")
    .where({ id })
    .del();

  return removed;
};

async function update(id, changes) {
  await db("tickets")
    .where({ id })
    .update(changes);

  return findById(id);
}
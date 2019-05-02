
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cohorts')
  // .del()
  .truncate() // delete the records and reset the id
    .then(function () {
      // Inserts seed entries
      return knex('cohorts').insert([
        {name: 'WEB18'},
        {name: 'WEB19'},
        {name: 'WEB20'}
      ]);
    });
};


exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments();
        tbl.text('vin', 128).unique().notNullable();
        tbl.text('make', 128).notNullable();
        tbl.text('model', 128).notNullable();
        tbl.float('mileage', 11, 2).notNullable();
        tbl.text('transmissionType', 128);
        tbl.text('titleStatus', 128);
  })
};

exports.down = function(knex) {
    return knex.dropTableIfExists('cars');
};

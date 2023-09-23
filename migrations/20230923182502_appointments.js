/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('appointments', (table) => {
        table.increments('id_factura').primary();
        table.string('id_Animal').notNullable();
        table.string('id_owner').notNullable();
        table.dateTime('some_time', { precision: 6 }).defaultTo(knex.fn.now(6));
        table.string('id_doctor').notNullable();
        table.string('id_especialis').notNullable();
        table.boolean('active').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};

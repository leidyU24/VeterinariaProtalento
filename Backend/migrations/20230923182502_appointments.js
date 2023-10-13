/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('appointments', (table) => {
        table.increments('id_appointments').primary();
        table.string('appointments_patient').notNullable();
        table.string('appointments_owner').notNullable();
        table.dateTime('appointments_date', { precision: 6 }).defaultTo(knex.fn.now(6));
        table.string('appointments_veterinary').notNullable();
        table.string('appointments_type').notNullable();
        table.string('appointments_status').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};

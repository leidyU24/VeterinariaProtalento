/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('appointments', (table) => {
        table.increments('id_appointments').primary();
       // table.foreign('id_patient').references("Patients.id-patient");
       // table.foreign('id_owner').references("Owner.id-owner");
        table.dateTime('appointments_date', { precision: 6 }).defaultTo(knex.fn.now(6));
       // table.foreign('id_veterinary').references("Veterinaries.id-veterinary");
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

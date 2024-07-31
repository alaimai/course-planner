/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema.createTable('enrolments', (table) => {
    table.increments('id').primary()
    table.integer('student_id')
    table.integer('course_id')
    table.foreign('student_id').references('students.id')
    table.foreign('course_id').references('courses.id')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
  return knex.schema.dropTable('enrolments')
}

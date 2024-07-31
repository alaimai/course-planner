export function up(knex) {
  return knex.schema.createTable('courses', function (table) {
    table.increments('id').primary()
    table.string('name').notNullable()
    table.string('location')
    table.text('description')
    table.integer('teacher_id').notNullable()
    table.foreign('teacher_id').references('id').inTable('teachers')
  })
}

export function down(knex) {
  return knex.schema.dropTable('courses')
}

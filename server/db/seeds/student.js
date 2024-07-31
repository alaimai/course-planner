/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('table_name').del()
  await knex('table_name').insert([
    {
      id: 1,
      last_name: 'Smith',
      first_name: 'John',
      email: 'john.smith@example.com',
    },
    {
      id: 2,
      last_name: 'Johnson',
      first_name: 'Emily',
      email: 'emily.johnson@example.com',
    },
    {
      id: 3,
      last_name: 'Williams',
      first_name: 'Michael',
      email: 'michael.williams@example.com',
    },
    {
      id: 4,
      last_name: 'Brown',
      first_name: 'Jessica',
      email: 'jessica.brown@example.com',
    },
    {
      id: 5,
      last_name: 'Jones',
      first_name: 'Matthew',
      email: 'matthew.jones@example.com',
    },
    {
      id: 6,
      last_name: 'Garcia',
      first_name: 'Sarah',
      email: 'sarah.garcia@example.com',
    },
    {
      id: 7,
      last_name: 'Martinez',
      first_name: 'David',
      email: 'david.martinez@example.com',
    },
    {
      id: 8,
      last_name: 'Anderson',
      first_name: 'Laura',
      email: 'laura.anderson@example.com',
    },
    {
      id: 9,
      last_name: 'Taylor',
      first_name: 'Daniel',
      email: 'daniel.taylor@example.com',
    },
    {
      id: 10,
      last_name: 'Thomas',
      first_name: 'Olivia',
      email: 'olivia.thomas@example.com',
    },
  ])
}

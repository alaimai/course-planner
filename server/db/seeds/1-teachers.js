/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('teachers').del()
  await knex('teachers').insert([
    // Teacher 1 teaches Math 101 and Science 101
    {
      id: 1,
      last_name: 'Smith',
      first_name: 'John',
      email: 'john.smith@example.com',
    },

    // Teacher 2 teaches History 101
    {
      id: 2,
      last_name: 'Johnson',
      first_name: 'Emily',
      email: 'emily.johnson@example.com',
    },

    // Teacher 3 teaches English 101
    {
      id: 3,
      last_name: 'Williams',
      first_name: 'Michael',
      email: 'michael.williams@example.com',
    },

    // Teacher 4 teaches Art 101 and Music 101
    {
      id: 4,
      last_name: 'Brown',
      first_name: 'Jessica',
      email: 'jessica.brown@example.com',
    },

    // Teacher 5 teaches Physical Education 101
    {
      id: 5,
      last_name: 'Jones',
      first_name: 'Matthew',
      email: 'matthew.jones@example.com',
    },

    // Teacher 6 teaches Computer Science 101
    {
      id: 6,
      last_name: 'Garcia',
      first_name: 'Sarah',
      email: 'sarah.garcia@example.com',
    },

    // Teacher 7 teaches Biology 101 and Chemistry 101
    {
      id: 7,
      last_name: 'Martinez',
      first_name: 'David',
      email: 'david.martinez@example.com',
    },
  ])
}

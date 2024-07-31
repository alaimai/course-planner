export async function seed(knex) {
  //await knex('courses').del();

  await knex('courses').insert([
    {
      name: 'Software development',
      teacher_id: 1,
      description: 'Ready to be a tech geek?',
    },
    {
      name: 'Mathematics',
      teacher_id: 2,
      description: 'Numbers, numbers, numbers.',
    },
    { name: 'Salsa dancing', teacher_id: 3, description: 'Time for a boogie!' },
    {
      name: 'Pottery',
      teacher_id: 4,
      description: 'Discover the artist in you.',
    },
  ])
}

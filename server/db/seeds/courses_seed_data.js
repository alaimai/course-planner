export async function seed(knex) {
  await knex('courses').del()

  await knex('courses').insert([
    {
      id: 1,
      name: 'Math 101',
      location: 'Room 12',
      description: 'Basic mathematics course covering algebra and geometry.',
      teacher_id: 1,
    },
    {
      id: 2,
      name: 'Science 101',
      location: 'Room 15',
      description:
        'Introduction to basic concepts in physics, chemistry, and biology.',
      teacher_id: 1,
    },
    {
      id: 3,
      name: 'History 101',
      location: 'Room 9',
      description:
        'Overview of ancient civilizations and their impact on modern society.',
      teacher_id: 2,
    },
    {
      id: 4,
      name: 'English 101',
      location: 'Room 11',
      description: 'Focus on grammar, writing, and literature analysis.',
      teacher_id: 3,
    },
    {
      id: 5,
      name: 'Art 101',
      location: 'Room 20',
      description: 'Introduction to basic drawing and painting techniques.',
      teacher_id: 4,
    },
    {
      id: 6,
      name: 'Music 101',
      location: 'Room 5',
      description: 'Basic music theory and practice with various instruments.',
      teacher_id: 4,
    },
    {
      id: 7,
      name: 'Physical Education 101',
      location: 'Gym',
      description: 'Fundamentals of physical fitness and team sports.',
      teacher_id: 5,
    },
    {
      id: 8,
      name: 'Computer Science 101',
      location: 'Room 18',
      description: 'Introduction to programming and computer systems.',
      teacher_id: 6,
    },
    {
      id: 9,
      name: 'Biology 101',
      location: 'Room 22',
      description:
        'Study of living organisms, including their structure, function, and evolution.',
      teacher_id: 7,
    },
    {
      id: 10,
      name: 'Chemistry 101',
      location: 'Room 25',
      description:
        'Basic principles of chemical reactions and properties of matter.',
      teacher_id: 7,
    },
  ])
}

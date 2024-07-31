/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('enrolments').del()
  await knex('enrolments').insert([
    // Student 1 enrolled in 5 courses
    { id: 1, student_id: 1, course_id: 1 },
    { id: 2, student_id: 1, course_id: 2 },
    { id: 3, student_id: 1, course_id: 3 },
    { id: 4, student_id: 1, course_id: 4 },
    { id: 5, student_id: 1, course_id: 5 },

    // Student 2 enrolled in 5 courses
    { id: 6, student_id: 2, course_id: 2 },
    { id: 7, student_id: 2, course_id: 4 },
    { id: 8, student_id: 2, course_id: 5 },
    { id: 9, student_id: 2, course_id: 6 },
    { id: 10, student_id: 2, course_id: 7 },

    // Student 3 enrolled in 5 courses
    { id: 11, student_id: 3, course_id: 1 },
    { id: 12, student_id: 3, course_id: 3 },
    { id: 13, student_id: 3, course_id: 7 },
    { id: 14, student_id: 3, course_id: 8 },
    { id: 15, student_id: 3, course_id: 9 },

    // Student 4 enrolled in 4 courses
    { id: 16, student_id: 4, course_id: 2 },
    { id: 17, student_id: 4, course_id: 4 },
    { id: 18, student_id: 4, course_id: 9 },
    { id: 19, student_id: 4, course_id: 10 },

    // Student 5 enrolled in 6 courses
    { id: 20, student_id: 5, course_id: 5 },
    { id: 21, student_id: 5, course_id: 6 },
    { id: 22, student_id: 5, course_id: 7 },
    { id: 23, student_id: 5, course_id: 8 },
    { id: 24, student_id: 5, course_id: 9 },
    { id: 25, student_id: 5, course_id: 10 },

    // Student 6 enrolled in 4 courses
    { id: 26, student_id: 6, course_id: 1 },
    { id: 27, student_id: 6, course_id: 3 },
    { id: 28, student_id: 6, course_id: 5 },
    { id: 29, student_id: 6, course_id: 6 },

    // Student 7 enrolled in 5 courses
    { id: 30, student_id: 7, course_id: 2 },
    { id: 31, student_id: 7, course_id: 4 },
    { id: 32, student_id: 7, course_id: 7 },
    { id: 33, student_id: 7, course_id: 9 },
    { id: 34, student_id: 7, course_id: 10 },

    // Student 8 enrolled in 5 courses
    { id: 35, student_id: 8, course_id: 1 },
    { id: 36, student_id: 8, course_id: 3 },
    { id: 37, student_id: 8, course_id: 7 },
    { id: 38, student_id: 8, course_id: 8 },
    { id: 39, student_id: 8, course_id: 9 },

    // Student 9 enrolled in 4 courses
    { id: 40, student_id: 9, course_id: 2 },
    { id: 41, student_id: 9, course_id: 5 },
    { id: 42, student_id: 9, course_id: 6 },
    { id: 43, student_id: 9, course_id: 9 },

    // Student 10 enrolled in 5 courses
    { id: 44, student_id: 10, course_id: 3 },
    { id: 45, student_id: 10, course_id: 4 },
    { id: 46, student_id: 10, course_id: 7 },
    { id: 47, student_id: 10, course_id: 8 },
    { id: 48, student_id: 10, course_id: 9 },
  ])
}

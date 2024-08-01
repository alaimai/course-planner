export interface Fruit {
  id: number
  name: string
}

export interface FruitData {
  name: string
}
export interface Course {
  id: number
  name: string
  location: string
  description: string
  teacher_id: number
}
export interface Personal_info {
  id: number
  last_name: string
  first_name: string
  email: string
  
}

export interface Student_course extends Personal_info{
  course_name:string
  location: string
  teacher_last_name: string
  teacher_first_name: string
}

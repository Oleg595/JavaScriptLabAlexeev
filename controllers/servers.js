import {StudentsList} from "../models/students_list.js";

let studentList = new StudentsList("./list.json")

export const getAll = (req, res) => {
    res.status(200).json(studentList.getAll())
}

export const create = (req, res) => {
    const newStudent = {
        ...req.body
    }
    studentList.addStudent(newStudent)
    res.status(201).json(newStudent)
}

export const remove = (req, res) => {
    studentList.removeStudent(req.params.id)
    res.status(200).json({message: 'Server has been removed.'})
}

export const edit = (req, res) => {
    studentList.edit(req.params.id, req.params.name)
    res.status(200).json({message: 'Server has been edit successfully.'})
}

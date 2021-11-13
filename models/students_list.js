import fs from 'fs'

let path = "./list.json"

export class StudentsList {
    constructor(){
        let data = JSON.parse(fs.readFileSync(path))
        this.data = data.studentsList.filter(s => s.id != null)
        this.newId = data.newId
    }

    addStudent(student){
        student.id = this.newId
        this.newId += 1
        this.data.push(student)
        this.saveChanges()
    }

    removeStudent(id){
        this.data = this.data.filter(s => s.id != id)
        this.saveChanges()
    }

    getAll(){
        return this.data
    }

    saveChanges(){
        fs.writeFileSync(path, JSON.stringify({newId: this.newId, studentsList: (this.data != null) ? this.data : {}}))
    }
}

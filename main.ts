/*type IStudentInformation = {
    name:string,
    age:number,
    cnicNo:number,
}
let student1:IStudentInformation={
    name:"tabiq",
    age:24,
    cnicNo:4240175589735,
}
let STUDENT2:IStudentInformation={
    name:"sharukh",
    age:28,
    cnicNo:4240175589735,
}*/ 
type Isudent = {
    name:string,
    rollNo:number,
}
type Iteacher ={
    name:string,
    experience:number,
}
let Sudent:Isudent={
    name:"tabiq",
    rollNo:51230,
}
let teacher:Iteacher={
    name:"tabiq",
    experience:3,
}
type intersectedtype = Isudent & Iteacher
let teacher2:intersectedtype={
    name:"tabiq",
    rollNo:51,
    experience:3,
}
let ball = {
    diameter:10,
}
let sphere ={
    diameter:10
}
let tube ={
    diameter:20,
    length:10
}
ball=tube



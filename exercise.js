var student = new Object(); 
student.name = "Lanny"; 
student.age = "25"; 
student.location = "China"; 
var json = JSON.stringify(student); 
alert(json); 

//{"name":"Lanny","age":"25","location":"China"}

var students = new Array() ; 
students[0] = "onepiece"; 
students[1] = "naruto"; 
students[2] = "bleach"; 
var json = JSON.stringify(students,switchUpper); 
function switchUpper(key, value) { 
    return value.toString().toUpperCase(); 
} 
alert(json); 
//{"ONEPIECE,NARUTO,BLEACH"}

var stuObj = new Object(); 
stuObj.id = "20122014001"; 
stuObj.name = "Tomy"; 
stuObj.age = 25; 

var stuArr = new Array(); 
stuArr[0] = "id"; 
stuArr[1] = "age"; 
stuArr[2] = "addr";//这个stuObj对象里不存在。 

var json = JSON.stringify(stuObj,stuArr); 
//var json = JSON.stringify(stuObj,stuArr,1000); 
//var json = JSON.stringify(stuObj,stuArr,'\t'); 
//var json = JSON.stringify(stuObj,stuArr,'OK '); 
alert(json); 
//{"id":"20122014001","age":"25"}

var book = {
    "title": "professional javascript",
    "edition": 3,
    "year": 2017,
    toJSON:function(){
        return this.title;
    }
}
var jsonText = JSON.stringify(book);
console.log(jsonText);
//"professional javascript"
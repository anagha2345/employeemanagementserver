 const db=require('./db')

 const allEmployee=()=>{
   return db.Employee.find().then(result=>{
        if(result){
            return{
                statusCode:200,
                employees:result
            }
        }
        else{
            return{
                statusCode:404,
                message:"no details available"
            }
        }
    })
 }
 const addEmployee=(id,uname,age,designation,salary)=>{
      return db.Employee.findOne({id}).then(result=>{         //find if an id is already present in the database
        if(result){
            return{
                statusCode:404,
                message:"employee already present"
            }
        }
        else{
            const newEmp=new db.Employee({              //create object of employee model for new employee
                id,
                uname,
                age,
                designation,
                salary
            })
            newEmp.save()
            return{
                statusCode:200,
                message:"employee added successfully"
            }
        }
      })
 }
 const removeEmployee=(eid)=>{
      return db.Employee.deleteOne({id:eid}).then(result=>{
        console.log(result);
        if(result){
          return { statusCode:200,
            message:"employee removed"}

        }
        else{
            return{
                statusCode:404,
                message:"employee not found"
            }
        }
       })
 }
 const getAnEmp=(id)=>{
    return db.Employee.findOne({id}).then(result=>{
        if(result){
            return{
                statusCode:200,
                employee:result
            }
        }
        else{
            return{
                statusCode:404,
                message:"employee not present"
            }
        }
    })
 }
 const editEmp=(id,uname,age,desig,salary)=>{
    return db.Employee.findOne({id}).then(result=>{
        if(result){
            result.id=id,
            result.uname=uname,
            result.age=age,
            result.salary=salary,
            result.desig=desig

            result.save()
            return {
                statusCode:200,
                message:"employee data updated"
            }
           
        } 
        else{
              return{
                statusCode:404,
                message:"employee not present"
              }  
            }
    })
 }
 module.exports={
    allEmployee,addEmployee,removeEmployee,getAnEmp,editEmp
}
import Emp from "../Model/employeeModel.js"

const createEmployee=async(req,res)=>{
    const { ename,email,emobile}=req.body;
    if(!ename ||!email ||!emobile)
    res.status(404).json({message:"Missing Fields"});
    else
    {
        try{
            const response=await Emp.create({ename,email,emobile});
            if(response)
            res.status(201).json({message:"Record Successful created"})
            else
            res.status(201).json({message:"Unable to create"})
        }catch(err)
        {
            res.json(err.message);
        }
    }
}

const getEmployees=async(req,res)=>{
    try{
        const e=await Emp.find();
        if(e.length!=0)
        res.status(200).json(e);
    else
    res.status(404).json({message:"No Records found"});
    }catch(error){
        res.json(error.message);
    }
}

const getEmployee=async(req,res)=>{
    try{
        const e=await Emp.findById(req.params.id);
        if(e)
        res.status(200).json(e);
    else
    res.status(404).json({message:"No Records found"});
    }catch(error){
        res.json(error.message);
    }
}

const deleteEmployee=async(req,res)=>{
    try{
        const e=await Emp.findByIdAndRemove(req.params.id);
        if(e)
        res.status(200).json({message:"Reord Deleted"});
    else
    res.status(404).json({message:"Record Not found"});
    }catch(error){
        res.json(error.message);
    }
}

const updateEmployee=async(req,res)=>{
    try{
        const e=await Emp.findByIdAndUpdate(req.params.id,req.body,{new:true})
        if(e)
        res.status(200).json({message:"Record updated Successfully"});
    else
    res.status(404).json({message:"Unable to Update Record"});
    }catch(error){
        res.status(404).json(error.message);
    }
}
export {createEmployee, getEmployees, getEmployee, deleteEmployee, updateEmployee}
const Todo = require("../models/todoModel")



//get all todos
const getAllTodos=async(req,res)=>{
    try{
        const getAllTodo=await Todo.find();
        res.status(200).json({message:'getting all todos',data:getAllTodo});
    }
    catch(err){
        res.status(400).json({message:'error in getting todos',data:err})
    }
}

//create a new todo
const createTodo=async(req,res)=>{
    try{
        const newTodo= new Todo(req.body);
        const savedTodo=await newTodo.save();
        res.status(201).json({message:'new todo created',data:savedTodo});

    }
    catch(err){
        res.status(400).json({message:'error in create todos',data:err})
    }
}

//update a todo
const updateTodo=async(req,res)=>{
    try{
        const updateTodo=await Todo.findByIdAndUpdate(req.params.id,{new:true})
        res.status(200).json({message:'todo updated successfully',data:updateTodo});
    }
    catch(err){
        res.status(400).json({message:'error in updating todo',data:err})
    }
}

//delete a todo
const deleteTodo=async(req,res)=>{
    try{
        const deleteTodo=await Todo.findByIdAndDelete(req.params.id);
        res.status(200).json({message:'todo deleted successfully',data:deleteTodo});
    }
    catch(err){
        res.status(400).json({message:'error in deleting todo',data:err})
    }
}




module.exports={
    getAllTodos,createTodo,deleteTodo,updateTodo
}
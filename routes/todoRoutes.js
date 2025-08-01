const express=require('express');
const { getAllTodos, createTodo, updateTodo, deleteTodo } = require('../controllers/todoController');
const router=express.Router();

router.get('/get-todos',getAllTodos);
router.post('/create-todo',createTodo);
router.put('/update-todo/:id',updateTodo);
router.delete('/delete-todo/:id',deleteTodo);

router.get('/debug', (req, res) => {
  res.send('API routes are working');
});



module.exports=router;
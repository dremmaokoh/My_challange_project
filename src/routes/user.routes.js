const express = require('express');
const {
  registerUser,
  getUsers,
  getUserByuserName,
  updateUserByuserName,
  deleteUserByuserName,
  
} = require('../controllers/controller');
const router = express.Router();

router.post('/register', registerUser,);
router.get('/waitlist', getUsers);
router.get('/waitlist/:userName', getUserByuserName);
router.put('/waitlist/:userName', updateUserByuserName);
router.delete('/waitlist/:userName', deleteUserByuserName);

module.exports = router;


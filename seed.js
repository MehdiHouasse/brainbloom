require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Quiz = require('./models/quiz');

(async function () {
  await Category.deleteMany({});
  const categories = await Category.create([
    { name: 'General Knowledge', sortOrder: 10 },
    { name: 'Books', sortOrder: 20 },
    { name: 'Sports', sortOrder: 30 },
    { name: 'Geography', sortOrder: 40 },
    { name: 'History', sortOrder: 50 },
    { name: 'Politics', sortOrder: 60 },
    { name: 'Art', sortOrder: 70 },
  ]);

import express from 'express';
const app = express();
const port = 8000;
app.use(express.urlencoded());
import { Sequelize, DataTypes } from 'sequelize';
const sequelize = new Sequelize('bookdb', 'root', '', {
  host: 'localhost',
  dialect: 'mysql' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});
// const sequelize = new Sequelize('sqlite::memory:');
const queryInterface = sequelize.getQueryInterface();



const Books = sequelize.define('Books', {
  // id:DataTypes.INTEGER,
  name: DataTypes.STRING,
  author: DataTypes.DATE,
}, { timestamps: false });



app.get('/test', async (req, res) => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})

app.get('/create-table', async (req, res) => {
  queryInterface.createTable('Books', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: DataTypes.STRING,
    author: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
    }
  });

  res.send("Table Created");
})
app.get('/create-book', async (req, res) => {
  const item = await Books.create({
    name: 'Who is who',
    author: "janedoe",
  });

  const books = await Books.findAll();
  // console.log(books)
  res.send(books);
})

app.post("/get-post-by-id/:id", async (req, res) => {
  console.log(req.params.id);
  const books = await Books.findOne({
    where: { id: req.params.id },

  });
  res.send(books)
})


app.post("/delete-by-id/:id", async (req, res) => {
  console.log(req.params.id);
  const books = await Books.destroy({
    where: {
      id: req.params.id
    },
  });
  console.log(books)
})


app.listen(port, function () {
  console.log(`${port} -> This port has been start`);
});
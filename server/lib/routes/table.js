import express from "express";
import faker from "faker";
import uuid from "uuid/v4";
import range from "lodash/range";

const tableRouter = express.Router();

/* GET users listing. */
tableRouter.get("/", function (req, res) {
  const { length = 100 } = req.query;
  const tableData = range(length).map(() => ({
    id: uuid(),
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    birthday: faker.date.past(),
    email: faker.internet.email(),
    job: faker.lorem.word(),
    data1: faker.lorem.words(),
    data2: faker.lorem.words(),
    data3: faker.lorem.words(),
    data4: faker.lorem.words(),
  }));
  res.json(tableData);
});

tableRouter.get("/new-item", function (req, res) {
  res.json({
    id: uuid(),
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    birthday: faker.date.past(),
    email: faker.internet.email(),
    job: faker.lorem.word(),
    data1: faker.lorem.words(),
    data2: faker.lorem.words(),
    data3: faker.lorem.words(),
    data4: faker.lorem.words(),
  });
});

export default tableRouter;

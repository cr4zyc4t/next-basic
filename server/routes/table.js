const express = require("express");
const router = express.Router();
const faker = require("faker");
const uuid = require("uuid/v4");
const range = require("lodash/range");

/* GET users listing. */
router.get("/", function (req, res) {
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

router.get("/new-item", function (req, res) {
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

module.exports = router;

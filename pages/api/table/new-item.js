import faker from "faker";
import uuid from "uuid/v4";

export default function (req, res) {
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
}

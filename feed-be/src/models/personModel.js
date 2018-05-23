const persons = [
  {
    name: "john",
    age: 10,
    posts: [],
    id: "1"
  },
  {
    name: "poon",
    age: 20,
    id: "2"
  }
];

export const list = () => persons;

export const findPersonById = id => persons.find(person => person.id === id);

var id = 2;
export const create = person => {
  const _person = { id: ++id + "", ...person };
  persons.push(_person);
  return _person;
};

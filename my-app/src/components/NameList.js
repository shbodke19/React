import React from "react";
import Person from "./Person";

function NameList() {
  //   const Names = ["Shree", "Bodke", "SHB"];
  //   const NameLists = Names.map((name) => <h2>{name}</h2>);
  //   return <div>{NameLists}</div>;

  const Persons = [
    {
      id: 1,
      name: "Shree",
      age: 24,
      skill: "React",
    },
    {
      id: 2,
      name: "Saurya",
      age: 25,
      skill: "HTML",
    },
    {
      id: 3,
      name: "SHB",
      age: 26,
      skill: "JS",
    },
  ];
  const NameL = Persons.map((person) => (
    <Person key={person.id} person={person} />
  ));
  //   const NameL = Persons.map((person) => (
  //     <h2>
  //       I am {person.name}. I am {person.age} years old. I know {person.skill}
  //     </h2>
  //   ));

  return <div>{NameL}</div>;
}
export default NameList;

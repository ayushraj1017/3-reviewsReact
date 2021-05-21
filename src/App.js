import React, { useState } from "react";
import Review from "./Review";
import people from "./data";
function App() {
  const [index, setIndex] = useState(0);

  const { id, name, job, image, text } = people[index];

  const checkNumber = (index) => {
    if (index < 0) {
      return people.length - 1;
    }
    if (index > people.length - 1) {
      return 0;
    }
    return index;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);

    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <main>
      <Review
        id={id}
        name={name}
        job={job}
        image={image}
        text={text}
        randomPerson={randomPerson}
        prevPerson={prevPerson}
        nextPerson={nextPerson}
      />
    </main>
  );
}

export default App;

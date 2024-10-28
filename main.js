


// Initial buttons
const newEnrolleeForm = document.querySelector('#new-student-teacher-form');

const buttonNewStudentTeacher = document.querySelector('#btn-new-student-teacher');

const buttonEnrollStudentTeacher = document.querySelector('#btn-enroll-student-teacher');

const filterStudentButtons = document.querySelector("#filter-buttons")

const buttonFilterAll = document.querySelector('#btn-filter-all');

const buttonFilterGryffindor = document.querySelector('#btn-filter-gryffindor');

const buttonFilterHufflepuff = document.querySelector('#btn-filter-hufflepuff');

const buttonFilterRavenclaw = document.querySelector('#btn-filter-ravenclaw');

const buttonFilterSlytherin = document.querySelector('#btn-filter-slytherin');

const buttonFilterVoldemort = document.querySelector('#btn-filter-voldemort');

const buttonFilterYear = document.querySelector("#btn-filter-year");



const studentsAndTeachers = [
  {
    id: 0,
    name: "Harry Potter",
    house: "Gryffindor",
    year: "Year 2",
    occupation: "Student",
    
  },

  {
    id: 1,
    name: "Hermione Granger",
    house: "Gryffindor",
    year: "Year 2",
    occupation: "Student",
  },

  {
    id: 2,
    name: "Ron Weasley",
    house: "Gryffindor",
    year: "Year 2",
    occupation: "Student",
  },

  {
    id: 3,
    name: "Ginny Weasley",
    house: "Gryffindor",
    year: "Year 1",
    occupation: "Student",
  },

  {
    id: 4,
    name: "Cho Chang",
    house: "Ravenclaw",
    year: "Year 5",
    occupation: "Student",
  },


  
  {
    id: 5,
    name: "Luna Lovegood",
    house: "Ravenclaw",
    year: "Year 1",
    occupation: "Student",
  },

  {
    id: 6,
    name: "Willa Weholt",
    house: "Hufflepuff",
    year: "Year 3",
    occupation: "Student",
  },

  {
    id: 7,
    name: "Cedric Diggory",
    house: "Hufflepuff",
    year: "Year 4",
    occupation: "Student",
  },

  {
    id: 8,
    name: "Draco Malfoy",
    house: "Slytherin",
    year: "Year 2",
    occupation: "Student",
  },

  {
    id: 9,
    name: "Severus Snape",
    house: "Slytherin",
    year: "Year 20",
    occupation: "Teacher",
  },

  {
    id: 10,
    name: "Tom Riddle",
    house: "Voldemort's Army",
    year: "Year 11",
    occupation: "Student",
  },
]


const renderAll = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};
  
const cardsOnDom = (studentsAndTeachers) => {
  let domString = "";
  for (const enrollee of studentsAndTeachers) {
    domString += `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <p class="card-text">${enrollee.name}</p>
        <p class="card-text">${enrollee.house}</p>
        <p class="card-text">${enrollee.year}</p>
        <p class="card-text">${enrollee.occupation}</p>
      <button class="btn btn-danger" id="delete--${enrollee.id}">Delete</button>
    </div>
  </div>
  `;
  }
  renderAll("#sortingHat", domString);
}



const filter = (studentsAndTeachers, house) => {
  const houseArray = [];

  studentsAndTeachers.forEach((enrollee) => {
    if (enrollee.house === house) {
      houseArray.push(house);
    }
  });

  return houseArray;
}
  




const form = document.querySelector('form');


const createEnrollee = (e) => {
  e.preventDefault(); 

  const newEnrolleeObj = {
    id: studentsAndTeachers.length + 1,
    name: document.querySelector("#name").value,
    house: document.querySelector("#house").value,
    year: document.querySelector("#year").value,
    occupation: document.querySelector("#occupation").value
  }

  studentsAndTeachers.push(newEnrolleeObj);
  cardsOnDom(studentsAndTeachers);
  form.reset();
}


// Event Listeners that make the buttons actually do things.

form.addEventListener('submit', createEnrollee);

const removeCard = document.querySelector("#sortingHat");

removeCard.addEventListener('click', (e) => {
  if (e.target.id.includes("delete")) {
    const [, id] = e.target.id.split("--");
    const index = studentsAndTeachers.findIndex(e => e.id === Number(id));
    studentsAndTeachers.splice(index, 1);
    cardsOnDom(studentsAndTeachers);
  }
});


buttonFilterGryffindor.addEventListener("click", () => {
  const gryffindorPeople = filter(studentsAndTeachers, "house");
  renderAll(gryffindorPeople);
});

buttonFilterHufflepuff.addEventListener("click", () => {
  const hufflepuffPeople = filter(studentsAndTeachers, "house");
  renderAll(hufflepuffPeople);
});



const sortingHat = () => {
  cardsOnDom(studentsAndTeachers);

}
  
 sortingHat();

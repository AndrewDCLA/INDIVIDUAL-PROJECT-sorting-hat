


const studentCards = document.querySelector('#student-cards');

const form = document.querySelector('#new-student-teacher-form');

const buttonNewStudentTeacher = document.querySelector('#button-new-student-teacher');

const buttonEnrollStudentTeacher = document.querySelector('#button-enroll-student-teacher');

const filterStudentButtons = document.querySelector("#filter-buttons")

const buttonFilterAll = document.querySelector('#button-filter-all');


const buttonFilterGryffindor = document.querySelector('#btn-filter-gryffindor');
const buttonFilterHufflepuff = document.querySelector('#btn-filter-hufflepuff');
const buttonFilterRavenclaw = document.querySelector('#btn-filter-ravenclaw');
const buttonFilterSlytherin = document.querySelector('#btn-filter-slytherin');
const buttonFilterVoldemort = document.querySelector('#btn-filter-voldemort');
const buttonFilterYear = document.querySelector("#btn-filter-year")



const studentsAndTeachers = [
  {
    id: 0,
    name: "Harry Potter",
    house: "Gryffindor",
    year: 2,
    teacher: false
    
  },

  {
    id: 1,
    name: "Hermione Granger",
    house: "Gryffindor",
    year: 2,
    teacher: false
  },

  {
    id: 2,
    name: "Ron Weasley",
    house: "Gryffindor",
    year: 2,
    teacher: false
  },

  {
    id: 3,
    name: "Ginny Weasley",
    house: "Gryffindor",
    year: 1,
    teacher: false
  },

  {
    id: 4,
    name: "Cho Chang",
    house: "Ravenclaw",
    year: 5,
    teacher: false
  },


  
  {
    id: 5,
    name: "Luna Lovegood",
    house: "Ravenclaw",
    year: 1,
    teacher: false
  },

  {
    id: 6,
    name: "Willa Weholt",
    house: "Hufflepuff",
    year: 3,
    teacher: false
  },

  {
    id: 7,
    name: "Cedric Diggory",
    house: "Hufflepuff",
    year: 4,
    teacher: false
  },

  {
    id: 8,
    name: "Draco Malfoy",
    house: "Slytherin",
    year: 2,
    teacher: false
  },

  {
    id: 9,
    name: "Severus Snape",
    house: "Slytherin",
    year: 20,
    teacher: true
  },

  {
    id: 10,
    name: "Tom Riddle",
    house: "Voldemort's Army",
    year: 11,
    teacher: false
  },


const submitForm = (e) => {
  e.preventDefault();

  let newStudent = {
    id: studentsAndTeachers.length + 1,
    name: document.querySelector("#form-name-input").value,
    house: sortStudent(),
    year: document.querySelector("#form-year-input").value,
  };

  studentsAndTeachers.push(newStudent);

  render(studentsAndTeachers);
  buttonFilterAll.checked = true;
  form.reset();
  toggleForm();
};


studentCards.addEventListener("click", (e) => {
  if (e.target.id.includes("expel")) {
    const [, id] = e.target.id.split("--");
    const index = studentsAndTeachers.findIndex((e) => e.id === Number(id));
    studentsAndTeachers[index].house = "Voldemort's Army";
    render(filter("Voldemort's Army"));
    buttonFilterVoldemort.checked = true;
  }
})


const filter = (target) => {
  let filteredStudentsAndTeachers = [];

  studentsAndTeachers.map((studentsAndTeacherObj) => {
    switch (studentObj.house === target) {
      case true:
        filteredStudentsAndTeachers.push(studentsAndTeacherObj);
        break;
    };
  });

  return filteredStudentsAndTeachers;
}



const renderStudents = (array) => {
  studentCards.innerHTML = '';
  array.map((studentsAndTeachersObj) => {
    studentCards.innerHTML += `
      <div class="card" style="width: 16rem;">
        <div class="card-body card-${sortShorten(studentsAndTeachersObj.house)}">
          <h5 class="card-title">${studentAndTeachersObj.name}</h5>
          <p class="card-text">${studentAndTeachersObj.house}</p>
          <p class="card-text">${studentAndTeachersObj.year}</p>
          <button type="button" class="btn btn-danger" id="expel--${studentsAndTeachersObj.id}">${expelHide(studentObj)}</button>
        </div>
      </div>
    `
  })
};

const filterRender = () => {
  switch (buttonFilterAll.checked === true) {
    render(studentsAndTeachers);
    break;
  } case (buttonFilterGryffindor.checked === true); 
    render(filter('Gryffindor'));
    break;
    case (buttonFilterHufflepuff.checked === true); {
    render(filter('Hufflepuff'));
    break;
  } case (buttonFilterRavenclaw.checked === true); {
    render(filter('Ravenclaw'))
    break;
  } case (buttonFilterSlytherin.checked === true); {
    render(filter('Slytherin'))
    break;
  } case (buttonFilterVoldemort.checked === true); {
    render(filter("Voldemort's Army"))
    break;
  } case (buttonFilterYear.checked === true); {
    render(filter("Year"))
    case (buttonFilterYear.checked === true); {
      render(filter("Year"))
      break;
    case (buttonFilterTeacher.checked === true); {
      render(filter("Teacher"))
      break;
    }
  }

}

const sortingHat = () => {
  buttonFilterAll.checked = true;
  render(studentsAndTeachers);
}



buttonNew.addEventListener("click", () => {
  toggleForm();
});

filterStudentButtons.addEventListener("click", () => {
  filterRender();
});

form.addEventListener("submit", submitForm);


sortingHat();

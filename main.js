const students = [
  {
    name: "MOXIRBEK ABDUMALIKOV MUZAFFAR O'G'LI",
    username: "moxirbek_a",
    password: "pass1234",
    email: "moxirbek_a@mail.com",
    age: 20,
    grade: "A",
    major: "Computer Science",
  },
  {
    name: "HUMOYUN ABDUQODIROV G‘AYRAT O'G'LI",
    username: "humoyun_q",
    password: "humoyun789",
    email: "humoyun_q@mail.com",
    age: 22,
    grade: "B",
    major: "Mathematics",
  },
  {
    name: "AZIZJON ALIQULOV IKROMJON O'G'LI",
    username: "azizjon_i",
    password: "azizsecure",
    email: "azizjon_i@mail.com",
    age: 21,
    grade: "A-",
    major: "Physics",
  },
  {
    name: "ZAFAR IBROHIMOV IKROM O'G'LI",
    username: "zafar_i",
    password: "zafar2024",
    email: "zafar_i@mail.com",
    age: 23,
    grade: "B+",
    major: "Chemistry",
  },
  {
    name: "MIRKOMIL MIRXOMIDOV ILXOM O'G'LI",
    username: "mirkomil_m",
    password: "mirkomil!56",
    email: "mirkomil_m@mail.com",
    age: 22,
    grade: "A",
    major: "Engineering",
  },
  {
    name: "OYATILLO OBLOBERDIYEV OYBEK O'G'LI",
    username: "oyatillo_o",
    password: "oyatillo#789",
    email: "oyatillo_o@mail.com",
    age: 20,
    grade: "B-",
    major: "Economics",
  },
  {
    name: "IBROHIM QAXROMONOV MUROD O'G'LI",
    username: "ibrohim_q",
    password: "ibrohimpass",
    email: "ibrohim_q@mail.com",
    age: 21,
    grade: "C+",
    major: "History",
  },
  {
    name: "JAHONGIR XALIMJONOV QAXRAMON O'G'LI",
    username: "jahongir_x",
    password: "jahon!45",
    email: "jahongir_x@mail.com",
    age: 23,
    grade: "A-",
    major: "Linguistics",
  },
  {
    name: "AZAMAT SA'DULLAYEV KAHRAMON O'G'LI",
    username: "azamat_s",
    password: "azamat!93",
    email: "azamat_s@mail.com",
    age: 20,
    grade: "B",
    major: "Business",
  },
  {
    name: "FAZLIDDIN USMONOV AXLIDDIN O'G'LI",
    username: "fazliddin_u",
    password: "fazliddin12",
    email: "fazliddin_u@mail.com",
    age: 21,
    grade: "A",
    major: "Psychology",
  },
  {
    name: "SHAXZODBEK SHAVKATOV SHUXRATBEK O'G'LI",
    username: "shaxzodbek_s",
    password: "shaxzod123",
    email: "shaxzodbek_s@mail.com",
    age: 22,
    grade: "B+",
    major: "Literature",
  },
  {
    name: "ABDURASHID ABDURAXMONOV RAVSHAN O'G'LI",
    username: "abdurashid_a",
    password: "abdurashid!78",
    email: "abdurashid_a@mail.com",
    age: 23,
    grade: "A-",
    major: "Philosophy",
  },
  {
    name: "SHAXZODBEK SODIQJONOV SHOYATBEK O'G'LI",
    username: "shaxzodbek_s2",
    password: "shaxzod!67",
    email: "shaxzodbek_s2@mail.com",
    age: 21,
    grade: "C",
    major: "Political Science",
  },
  {
    name: "ISLOMBEK KAMOLIDDINOV SAYFIDDIN O'G'LI",
    username: "islombek_k",
    password: "islombek!89",
    email: "islombek_k@mail.com",
    age: 20,
    grade: "A",
    major: "Geography",
  },
  {
    name: "OZODBEK NEMATOV BOTIRALIJONOVICH",
    username: "ozodbek_n",
    password: "ozodbekpass",
    email: "ozodbek_n@mail.com",
    age: 23,
    grade: "B",
    major: "Biology",
  },
  {
    name: "RUSLAN TODJIDINOV RUKNIDDIN O'G'LI",
    username: "ruslan_t",
    password: "ruslan2024",
    email: "ruslan_t@mail.com",
    age: 24,
    grade: "B+",
    major: "Chemistry",
  },
  {
    name: "TOHIRJON YUSUPOV BOTIRALI O'G'LI",
    username: "tohirjon_y",
    password: "tohirpass",
    email: "tohirjon_y@mail.com",
    age: 22,
    grade: "A",
    major: "Physics",
  },
  {
    name: "MEHRIDDIN BARNAYEV SHONAZAR O'G'LI",
    username: "mehriddin_b",
    password: "mehri!98",
    email: "mehriddin_b@mail.com",
    age: 21,
    grade: "C+",
    major: "Law",
  },
  {
    name: "UMIDJON HAMIDJONOV ZARIFJONOVICH",
    username: "umidjon_h",
    password: "umid2024",
    email: "umidjon_h@mail.com",
    age: 23,
    grade: "B-",
    major: "Statistics",
  },
  {
    name: "AXMADBEK USMANOV ANVAR O'G'LI",
    username: "axmadbek_u",
    password: "axmad!pass",
    email: "axmadbek_u@mail.com",
    age: 20,
    grade: "A",
    major: "Computer Engineering",
  },
  {
    name: "SAID ORIFOV ODIL O'G'LI",

    username: "said_o",
    password: "said2023",
    email: "said_o@mail.com",
    age: 21,
    grade: "B",
    major: "Marketing",
  },
  {
    name: "SHOHAKBAR ANVARJONOV",
    username: "shoakbar_a",
    password: "shoakbar!pass",
    email: "shoakbar_a@mail.com",
    age: 22,
    grade: "C",
    major: "Accounting",
  },
  {
    name: "SARDOR ERKINOV DILSHOD O'G'LI",
    username: "sardor_e",
    password: "sardorpass",
    email: "sardor_e@mail.com",
    age: 20,
    grade: "B+",
    major: "Management",
  },
  {
    name: "SHOXRUZBEK ABDURAXMONOV AZIZBEK O'G'LI",
    username: "shoxruzbek_a",
    password: "shoxruz!pass",
    email: "shoxruzbek_a@mail.com",
    age: 21,
    grade: "A",
    major: "Architecture",
  },
];

const subjects = [
  "All",
  "Computer Science",
  "Mathematics",
  "Physics",
  "Chemistry",
  "Engineering",
  "Economics",
  "History",
  "Linguistics",
  "Business",
  "Psychology",
  "Literature",
  "Philosophy",
  "Political Science",
  "Geography",
  "Biology",
  "Law",
  "Statistics",
  "Computer Engineering",
  "Marketing",
  "Accounting",
  "Management",
  "Architecture",
];

const dropdownValue = document.querySelector(".my-dropdown");
subjects.map(subject => dropdownValue.innerHTML += `<option value="${subject.toLowerCase()}">${subject}</option>`);

function displayCard(array) {
  document.getElementById("parent").innerHTML = "";
  array.map((element, i) => {
    document.getElementById("parent").innerHTML += `
    <div class="col col-md-6 col-lg-4">
    <div class="card">
      <h2>${element.name}</h2>
      <p class="grade">Grade: ${element.grade}</p>
      <p class="direction">Direction: ${element.major}</p>
      <p class="age">Age: ${element.age}</p>
      <button class="delete-btn" onclick="(removeCard(${i}))">Delete</button>
    </div>
  </div>
    `;
  });
}
displayCard(students);

function removeCard(index) {
  students.splice(index, 1);
  displayCard(students);
}


function searchStudent(searchStudent) {
  const searchedStudent = students.filter((student) => student.name.includes(searchStudent.toLocaleUpperCase()))
  if (searchedStudent) {
    displayCard(searchedStudent)
  }else {
    alert('Xato')
  }
}

function selectDirection() {
  if (dropdownValue.value == "all") {
    displayCard(students);
  } else {
    const selectedDirection = students.filter(
      (student) => student.major.toLocaleLowerCase() === dropdownValue.value
    );
    displayCard(selectedDirection);
  }
}

let bool = true
const sortStudentUp = () => {
  changeArrow()
  const sortedStudents = students.sort((a, b) => bool ? a.age - b.age : b.age - a.age)
  bool = !bool
  displayCard(sortedStudents);
};

function changeArrow() {
  if(!bool){
    document.querySelector('.up').style.display = 'block'
    document.querySelector('.down').style.display = 'none'
  }else {
    document.querySelector('.up').style.display = 'none'
    document.querySelector('.down').style.display = 'block'
  }
}

// function randomStudent() {
//   const randomNumber = Math.floor(Math.random() * 24)
//   const newObject = students[randomNumber]
//     document.getElementById("parent").innerHTML += `
//     <div class="col col-md-6 col-lg-4">
//     <div class="card">
//       <h2>${newObject.name}</h2>
//       <p class="grade">Grade: ${newObject.grade}</p>
//       <p class="direction">Direction: ${newObject.major}</p>
//       <p class="age">Age: ${newObject.age}</p>
//       <button class="delete-btn" onclick="(removeCard(${i}))">Delete</button>
//     </div>
//   </div>
//     `;
// }

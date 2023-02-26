// Retrieve existing array from local storage
let existingArray = JSON.parse(localStorage.getItem('myArray')) || [];

// Check if value already exists in array
if (!existingArray.includes('new value')) {
  // Add value to array
  existingArray.push('new value');

  // Store updated array in local storage
  localStorage.setItem('myArray', JSON.stringify(existingArray));
}


const entry = "example"; // the entry to be added to the array

// get the existing array from local storage or initialize it to an empty array
let array = JSON.parse(localStorage.getItem("myArray")) || [];

// check if the entry already exists in the array
if (!array.includes(entry)) {
  // add the entry to the array
  array.push(entry);

  // store the updated array in local storage
  localStorage.setItem("myArray", JSON.stringify(array));
}


function savePlannerEntry(btnID, textEntry) {
    let plannerEntries = JSON.parse(localStorage.getItem("plannerEntries")) || [];
    let newPlannerEntry = {
        timeSlot: btnID,
        text: textEntry
    };

    // check if the entry already exists in the array
    let existingEntry = plannerEntries.find(entry => entry.timeSlot === btnID);
    if (existingEntry) {
        // entry already exists, update the text value
        existingEntry.text = textEntry;
    } else {
        // entry doesn't exist, add it to the array
        plannerEntries.push(newPlannerEntry);
    }

    localStorage.setItem("plannerEntries", JSON.stringify(plannerEntries));
    getPlannerEntries(plannerEntries);
};


let checkArray = plannerEntries.find(function(entry) {
    return entry.timeSlot === btnID;
});



const increment = (num) => num + 1;

// Converted to traditional function syntax:
function increment(num) {
    return num + 1;
}


function savePlannerEntry(btnID, textEntry) {
    let plannerEntries = JSON.parse(localStorage.getItem("plannerEntries")) || [];
    let newPlannerEntry = {
        timeSlot: btnID,
        text: textEntry
    };

    let checkArray = plannerEntries.find(function(entry) {
        return entry.timeSlot === btnID;
    });

    if (checkArray) {
        checkArray.text = textEntry;
    } else {
        plannerEntries.push(newPlannerEntry);
    }

    localStorage.setItem("plannerEntries", JSON.stringify(plannerEntries));
    getPlannerEntries(plannerEntries);
}


const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
  ];
  
  const result = people.find(person => person.name === 'Bob');
  
  console.log(result); // { name: 'Bob', age: 30 }
  



  const people = [
    { name: 'Alice', age: 28, occupation: 'Software Developer' },
    { name: 'Bob', age: 35, occupation: 'Data Analyst' },
    { name: 'Charlie', age: 42, occupation: 'Sales Manager' }
  ];
  
  const searchKey = 'occupation';
  const searchValue = 'Software Developer';
  
  const result = people.find(function(person) {
    return Object.keys(person).some(function(key) {
      return key === searchKey && person[key] === searchValue;
    });
  });
  
  console.log(result); // { name: 'Alice', age: 28, occupation: 'Software Developer' }

  
  const people = [
    { name: 'Alice', age: 28, occupation: 'Software Developer' },
    { name: 'Bob', age: 35, occupation: 'Data Analyst' },
    { name: 'Charlie', age: 42, occupation: 'Sales Manager' }
  ];
  
  const searchKey = 'occupation';
  const searchValue = 'Software Developer';
  

  
  const people = [
    { name: 'Alice', age: 28, jobTitle: 'Software Developer' },
    { name: 'Bob', age: 35, jobTitle: 'Data Analyst' },
    { name: 'Charlie', age: 42, jobTitle: 'Sales Manager' }
  ];
  
  const searchKey = 'jobTitle';
  const searchValue = 'Software Developer';
  
  const result = people.find(function(person) {
    let match = false;
    Object.keys(person).forEach(function(key) {
      if (key === searchKey && person[key] === searchValue) {
        match = true;
      }
    });
    return match;
  });
  
  console.log(result); // { name: 'Alice', age: 28, jobTitle: 'Software Developer' }

  
  const people = [
    { name: 'Alice', age: 28, jobTitle: 'Software Developer' },
    { name: 'Bob', age: 35, jobTitle: 'Data Analyst' },
    { name: 'Charlie', age: 42, jobTitle: 'Sales Manager' }
  ];
  
  const searchKey = 'jobTitle';
  const searchValue = 'Software Developer';
  
  const result = people.find(function(person) {
    let match = false;
    Object.keys(person).forEach(function(key) {
      if (key === searchKey && person[key] === searchValue) {
        match = true;
      }
    });
    return match;
  });
  
  console.log(result); // { name: 'Alice', age: 28, jobTitle: 'Software Developer' }

  

  const people = [
    { name: 'Alice', age: 28, jobTitle: 'Software Developer' },
    { name: 'Bob', age: 35, jobTitle: 'Data Analyst' },
    { name: 'Charlie', age: 42, jobTitle: 'Sales Manager' }
  ];
  
  const searchKey = 'jobTitle';
  const searchValue = 'Software Developer';
  
  const result = people.find(function(person) {
    let match = false;
    for (let key in person) {
      if (key === searchKey && person[key] === searchValue) {
        match = true;
      }
    }
    return match;
  });
  
  console.log(result); // { name: 'Alice', age: 28, jobTitle: 'Software Developer' }
  
  
  // Example array of objects
const users = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Bob', age: 35 }
  ];
  
  // Example user object to search for
  const searchUser = { name: 'John', age: 25 };
  
  // Loop over each user in the array and compare its properties to the searchUser
  for (let i = 0; i < users.length; i++) {
    const currentUser = users[i];
    let match = true;
  
    // Loop over each property of the currentUser and compare it to the searchUser
    for (let key in searchUser) {
      if (searchUser[key] !== currentUser[key]) {
        match = false;
        break;
      }
    }
  
    // If all properties match, log a message indicating a match was found
    if (match) {
      console.log(`Match found for ${JSON.stringify(searchUser)} at index ${i}`);
      break; // stop the loop since a match was found
    }
  }
  
//Create a fake API function
function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "Alice",
        age: 25,
        email: "alice@example.com"
      });
    }, 2000); // Simulates 2 seconds delay
  });


//
async function showUserData() {
  console.log("Fetching user data...");
  const user = await fetchUserData();
  console.log("User Data Received:");
  console.log(`Name: ${user.name}`);
  console.log(`Age: ${user.age}`);
  console.log(`Email: ${user.email}`);
}

showUserData();

//using try and catch
function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5;
      if (success) {
        resolve({
          name: "Bob",
          age: 30,
          email: "bob@example.com"
        });
      } else {
        reject("Failed to fetch user data.");
      }
    }, 2000);
  });
}

async function showUserData() {
  try {
    console.log("Fetching user data...");
    const user = await fetchUserData();
    console.log("User Data Received:");
    console.log(user);
  } catch (error) {
    console.log("Error:", error);
  }
}

showUserData();

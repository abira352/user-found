// Function to simulate fetching user details
function getUserDetails() {
    return new Promise((resolve, reject) => {
      // Simulating a 1-second delay to fetch user details
      setTimeout(() => {
        const userFound = true; // Change this to false to simulate an error
  
        if (userFound) {
          resolve("User Found"); // Resolve with success message if user is found
        } else {
          reject("User Not Found"); // Reject with error message if user is not found
        }
      }, 1000); // 1-second delay
    });
  }
  
  // Handling success and error cases using .then() and .catch()
  getUserDetails()
    .then((message) => {
      console.log(message); // This will be executed if the Promise resolves (user found)
    })
    .catch((error) => {
      console.error(error); // This will be executed if the Promise is rejected (user not found)
    });
  
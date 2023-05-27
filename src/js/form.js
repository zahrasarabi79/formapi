const btn = document.getElementById("getDataBtn");
const firstName = document.querySelector("#firstname");
const lastName = document.querySelector("#lastname");
const url = "http://localhost:3000/";
btn.addEventListener("click", giveData);
function giveData() {
  const people = {
    name: firstName.value,
    lastname: lastName.value,
  };
  fetchData(people);
}
async function fetchData(people) {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(people),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    console.log("Response:", response); // Perform further processing or return the data as needed
  } catch (error) {
    console.error("Error:", error); // Handle the error or throw it to be caught elsewhere
  }
}
// کد های پایین باید در فانکشن  (giveData) باشند
// fetch(url, {
//   method: "POST",
//   body: JSON.stringify(people),
//   headers: {
//     "Content-Type": "application/json",
//   },
// })

// .then((response) => response)
// .then((data) => {
//   console.log("Request successful");
//   console.log("Response:", data);
// })
// .catch((error) => {
//   console.log("Request failed:", error);
// });
// }

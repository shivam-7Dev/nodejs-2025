/*
    1. Create a function called "fetchPokemon" that returns 
       a Promise that resolves with the value :
       { data: {name: "Pickachu", power: 20} } after 2 seconds
    2. Print out "Program starting..."
    
    3. Create an async function that uses await to wait for
       the data to comes back from "fetchPokemon" then log out
       the data

    4. Call the async function you created
    5. Log out "Program complete!"

    After your're done the above ^:
    6. Change "fetchPokemon" to reject after 2 seconds instead
       with a new Error Object with the message "Danger, danger!"
    7. How can you modify your async function to catch this error?
*/

const fetchPokemon = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: { name: "Pickachu", power: 20 } });
    }, 2000);
  });
};

console.log("program startign....");

const getData = async () => {
  try {
    const data = await fetchPokemon();
    console.log(data);
    console.log("program completed");
  } catch (error) {
    console.log({ error });
  }
};

getData();

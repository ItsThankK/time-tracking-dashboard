async function fetchJSON() {
  try {
    console.log(`called`);
    
    const response = await fetch("/data.json");

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error);
    
  }
}

fetchJSON()

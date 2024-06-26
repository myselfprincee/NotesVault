
let notes = [];


const OriginalUrl = import.meta.env.VITE_DATABASE_URL

const getNotes = async () => {
    //API CALL
    const response = await fetch(`${OriginalUrl}/notes/allnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token")
      }
    })
    const json = await response.json();
    notes = json
    console.log(notes)

  }
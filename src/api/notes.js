const URL = `https://devscale-mockapi.fly.dev/api/collections/notes/records`

export const createNoteAPI = async (newNote) => {
  try {
    const response = await fetch(
      URL, 
      { 
        method: 'POST',
        body: newNote,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )

    if (response.status === 200) {
      const data = await response.json();
      return data
    } else {
      console.log('Error creating data. Status:', response.status);
    }
  } catch (error) { }
}

export const fetchNotes = async () => { 
  const email = localStorage.getItem("email");
  try {
    const response = await fetch(`${URL}?filter=(user='${email}')`);

    if (response.status === 200) {
      const data = await response.json();  
      return data.items.reverse()
    } else {
      console.log('Error fetching data. Status:', response.status);
    }
  } catch (error) {
    // console.error('Error fetching data', error);
  }
};

export const updateNoteAPI = async (id, updatedNote) => {
  try {
    const response = await fetch(
      `${URL}/${id}`, 
      { 
        method: 'PATCH',  
        body: updatedNote,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
    console.log('from api', response)
    if (response.status === 200) {
      const data = await response.json();
      return data
    } else {
      console.log('Error updating data. Status:', response.status);
    }
  } catch (error) {
    
  }
}

export const deleteNoteAPI = async (id) => { 
  try {
    const response = await fetch(`${URL}/${id}`, { method: 'DELETE' })
    if (response.status === 204) {
      return true
    } else {
      return false
    }
  } catch (error) {
    // console.error('Error deleting data', error);
  }
}
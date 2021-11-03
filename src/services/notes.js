import axios from "axios";

const baseUrl = "http://localhost:3001/notes";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const addNoteToServer = (newNote) => {
  axios
    .post(baseUrl, newNote)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

const deleteNoteFromServer = (id) => {
  axios
    .delete(`http://localhost:3001/notes/${id}`)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export { getAll, addNoteToServer, deleteNoteFromServer };

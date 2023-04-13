import axios from 'axios';

export function getCookie(user) {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(user + '=')) {
      return cookie.substring(user.length + 1);
    }
  }
  return null;
}

export function getEnrollmentsForRoutine(routines) {

  const resultObject = {};

  for (let i = 0; i < routines.length; i++) {
    axios.get(`http://localhost:8080/api/enrollments/routine/${routines[i].id}`)
    .then(response => {
      console.log(response.data);
      resultObject[routines[i]] = response.data;
    })
    .catch(error => {
      console.error(error);
    });
  }

  console.log(resultObject);

  return resultObject;
}
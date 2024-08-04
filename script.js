const userAPI = 'https://randomuser.me/api/';

function renderUser() {
    fetch(userAPI)
     .then(response => response.json())
     .then(data => {
         const user = data.results[0];
         const box = document.querySelector('.wrapper')
         box.innerHTML = `<h1>Gender:${user.gender}</h1>
         <h2>Name:${user.name.first} ${user.name.last}</h2>
         <h3>Email:${user.email}</h3>
         <h3>Address:${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}</h3>
         <h3>Phone:${user.phone}</h3>
         <h3>Birthday:${new Date(user.dob.date).toLocaleDateString()}</h3>
         <img src="${user.picture.large}">`
     })
     .catch(error => console.log('XATO'))
}
renderUser();


const btn = document.querySelector('.btn')

btn.addEventListener('click', function() {
    renderUser();
})
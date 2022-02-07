$(document).ready(function () {
  var url = 'https://randomuser.me/api/?results=1&nat=br'
  var p = ''
  fetchInformation(url)
  function fetchInformation(url) {
    fetch(url)
      .then(response => response.json())
      .then(function (data) {
        data.results.forEach(person => {
          p = `<div class="user-name"id="user-name"><span>${person.name.first}</span></div>`
        })
        $('#user-name').append(p)
        data.results.forEach(person => {
          p = `<span>${person.name.first}${person.name.last}</span>`
        })
        $('#welcome-name').append(p)
        $('#user-name-sidebar').append(p)
        data.results.forEach(person => {
          p = `<span>${person.email}</span>`
        })
        $('#email').append(p)
        data.results.forEach(person => {
          p = `<span>${person.phone}</span>`
        })
        $('#phone').append(p)
      })
  }
})

function onSubmit() {
    const value = document.getElementById('name-input').value
    console.log(value)
    fetch('/express-full-stack/api/greeting?name=' + value)
      .then(response => response.text())
      .then(greeting => {
        document.getElementById('greeting').innerText=greeting
      })
  } 
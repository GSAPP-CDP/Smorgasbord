import fs from 'fs'
import axios from 'axios'

axios('https://jsonplaceholder.typicode.com/todos/1').then((response) => {
  fs.writeFile('todos_1.json', JSON.stringify(response.data, null, 2), 'utf-8', (err) => {
    if (err) return console.log('An error happened', err)
    console.log('File fetched from {JSON} Placeholder and written locally!')
  })
})


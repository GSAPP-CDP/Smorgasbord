import fs from 'fs'
import axios from 'axios'

export default function (moduleOptions) {

  const { nuxt } = this

  nuxt.hook('ready', async nuxt => {
    console.log('Nuxt is ready - PROCESS_CONTENT')


    // PROCESSING CONTENT HAPPENS HERE //
    axios('https://jsonplaceholder.typicode.com/todos/1').then((response) => {
      fs.writeFile('data/content.json', JSON.stringify(response.data, null, 2), 'utf-8', (err) => {
        if (err) return console.log('An error happened', err)
        console.log('File fetched from {JSON} Placeholder and written locally from MODULD!')
      })
    })

  })
}


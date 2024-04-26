const express = require('express')

const app = express()

app.get('/', (req, res) => {
    return res.send('<h1>It is ok!</h1>')
})

const port = process.env.PORT || 4000

app.listen(port, () => console.log(`listening on port ${port}`))
import express from 'express'
import path from 'path'
import serverRoutes from './routes/routes.js'

const __dirname = path.resolve()
const PORT = 3000
const app = express()

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'ejs'))

app.use(express.static(path.resolve(__dirname, 'static')))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(serverRoutes)

app.get('/', (req, res) => {
    res.render('index', {title: 'Main Page', active: 'main'})
})

app.get('/add', (req, res) => {
    res.render('add', {title: 'Add Page', active: 'add'})
})

app.get('/remove', (req, res) => {
    res.render('remove', {title: 'Remove Page', active: 'remove'})
})

app.get('/getStudent', (req, res) => {
    res.render('getStudent', {title: 'Get And Edit Student Page', active: 'get and edit student'})
})

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}...`)
})

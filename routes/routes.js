import {Router} from 'express'
import {getAll, create, remove, edit} from '../controllers/servers.js'
const router = Router()

router.get('/api/server', getAll)

router.post('/api/server', create)

router.delete('/api/server/:id', remove)

router.post('/api/server/:id/:name', edit)

export default router

import { Router } from 'express'
import * as skillsCtrl from '../controllers/skills.js'

const router = Router()

/* GET users listing. */
router.get('/', skillsCtrl.index)
router.get('/new', skillsCtrl.new)
router.get('/:id', skillsCtrl.show)
router.delete('/:id', skillsCtrl.delete)
router.post('/', skillsCtrl.create)

export {
  router
}

import { Router } from 'express'

const router = Router()

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express Dev Skills Lab for Unit 2' })
})

export { 
  router
}

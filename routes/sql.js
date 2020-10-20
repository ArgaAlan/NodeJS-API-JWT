const router = require('express').Router();
const db = require('../db/index')

router.get('/', async (req, res, next) => {
    try {
        let results = await db.all();
        res.json(results);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        let results = await db.one(req.params.id);
        res.json(results);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

/*
    Next routes:
    router.put = UPDATE
    router.delete = DELETE
    router.post = CREATE
*/
module.exports = router;
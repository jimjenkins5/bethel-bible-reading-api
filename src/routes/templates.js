var express = require('express'),
    router = express.Router(),
    _ = require('lodash')
    initialTemplates = require('../initial-data/templates'),
    path = require('path'),
    loki = require('lokijs'),
    dbPath = path.join(__dirname, '../db/bible-reading.json'),
    db = new loki(dbPath, { autosave: true, autoload: true, autosaveInterval: 1000 });

router.get('/load', (req, res) => {
   var templates;

   db.removeCollection('templates');
   templates = db.addCollection('templates');

   initialTemplates.forEach((template) => {
      templates.insert(template);
   });

   db.saveDatabase();

   res.json(templates.data);
});

router.get('/', (req, res) => {
   var templates = db.getCollection('templates');

   if (!templates) {
      res.json({ data: [ {} ] });
      return;
   }
   res.json({ data: _.map(templates.data, (i) => { return _.omit(i, ['meta', '$loki']) }) });
});

router.get('/:id', (req, res) => {
   var templates = db.getCollection('templates'),
       template;

   if (!templates) {
      res.json({ data: {} });
      return;
   }

   template = templates.get(req.params.id);

   if (!template) {
      res.json({ data: {} });
      return;
   }

   res.json({ data: _.omit(template, ['meta', '$loki']) });
});

module.exports = router;

var express = require('express'),
    router = express.Router(),
    loki = require('lokijs'),
    db = new loki('../db/bible-reading.json');

router.get('/load', (req, res) => {
   var templates = db.addCollection('templates'),
       template;

   template = {
      name: 'Bethel Bible Reading',
      days: [
         {
            order: 1,
            reading: 'Gen 1-3',
         },
         {
            order: 2,
            reading: 'Gen 4-6',
         },
         {
            order: 3,
            reading: 'Gen 7-8',
         },
         {
            order: 4,
            reading: 'Gen 9-12',
         },
      ],
   };

   templates.insert(template);
   templates.save();

   res.json("done");
});

module.exports = router;

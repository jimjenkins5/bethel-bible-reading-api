var express = require('express'),
    router = express.Router(),
    _ = require('lodash'),
    path = require('path'),
    loki = require('lokijs'),
    dbPath = path.join(__dirname, '../db/bible-reading.json'),
    db = new loki(dbPath, { autosave: true, autoload: true, autosaveInterval: 1000 });

router.get('/load', (req, res) => {
   var schedules, schedule

   db.removeCollection('schedules');
   schedules = db.addCollection('schedules');

   schedule = {
      id: schedules.maxId + 1,
      templateId: 1,
      startOnDay: 1,
      completedDays: [ 1, 2 ],
      startDate: '2017-01-01',
   };

   schedules.insert(schedule);

   db.saveDatabase();

   res.json(schedules.data);
});

router.get('/', (req, res) => {
   var schedules = db.getCollection('schedules');

   if (!schedules) {
      res.json({ data: [ {} ] });
      return;
   }
   res.json({ data: _.map(schedules.data, (i) => { return _.omit(i, ['meta', '$loki']) }) });
});

router.get('/:id', (req, res) => {
   var schedules = db.getCollection('schedules'),
       schedule;

   if (!schedules) {
      res.json({ data: {} });
      return;
   }

   schedule = schedules.get(req.params.id);

   if (!schedule) {
      res.json({ data: {} });
      return;
   }

   res.json({ data: _.omit(schedule, ['meta', '$loki']) });
});

router.post('/', (req, res) => {
   var schedules = db.getCollection('schedules'),
       schedule;

   if (!req.body.schedule) {
      res.json({ error: 'no schedule included' });
      return;
   }

   schedule = {
      id: schedules.maxId + 1,
      templateId: req.body.schedule.templateId,
      startOnDay: req.body.schedule.startOnDay,
      completedDays: req.body.schedule.completedDays,
      startDate: req.body.schedule.startDate,
   };

   schedules.insert(schedule);

   res.json(schedule);
});

router.put('/:id', (req, res, next) => {
   var schedules = db.getCollection('schedules'),
       schedule;

   schedule = schedules.get(req.params.id);

   if (!schedule) {
     next();
     return;
   }

   if (!req.body.schedule) {
      res.json({ error: "schedule not included" });
      return;
   }

   schedule.templateId = req.body.schedule.templateId || schedule.templateId;
   schedule.startOnDay = req.body.schedule.startOnDay || schedule.startOnDay;
   schedule.completedDays = req.body.schedule.completedDays || schedule.completedDays;
   schedule.startDate = req.body.schedule.startDate || schedule.startDate;

   schedules.update(schedule);

   res.json(_.omit(schedule, [ 'meta', '$loki' ]));
});

router.delete('/:id', (req, res) => {
   var schedules = db.getCollection('schedules'),
       schedule = schedules.get(req.params.id);

   if (!schedule) {
      next();
      return;
   }

   schedules.remove(schedule);

   res.json(_.omit(schedule, [ 'meta', '$loki' ]));
});

module.exports = router;

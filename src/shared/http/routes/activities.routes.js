const { createActivityController } = require("../../../modules/activities/useCases/createActivity");
const { listActivitiesController } = require("../../../modules/activities/useCases/listActivities");
const { updateActivityController } = require("../../../modules/activities/useCases/updateActivity");
const { deleteActivityController } = require("../../../modules/activities/useCases/deleteActivity");

async function activitiesRoutes(fastify) {
  fastify.post("/activities", (req, reply) => createActivityController.handle(req, reply));
  fastify.get("/activities", (req, reply) => listActivitiesController.handle(req, reply));
  fastify.put("/activities/:id", (req, reply) => updateActivityController.handle(req, reply));
  fastify.delete("/activities/:id", (req, reply) => deleteActivityController.handle(req, reply));
}

module.exports = { activitiesRoutes };

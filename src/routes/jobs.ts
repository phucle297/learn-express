import { Router } from "express";

export const jobRouter = Router();

const _PREFIX = "/jobs";

jobRouter.get(_PREFIX, (req, res) => {
  res.send("GET /jobs");
});

jobRouter.get(_PREFIX + "/:id", (req, res) => {
  res.send("GET /jobs " + req.params.id);
});

jobRouter.post(_PREFIX, (req, res) => {
  res.send("POST /jobs");
});

jobRouter.put(_PREFIX, (req, res) => {
  res.send("PUT /jobs");
});

jobRouter.delete(_PREFIX, (req, res) => {
  res.send("DELETE /jobs");
});

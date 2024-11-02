// group controller
import { Request, Response } from "express";

class GroupController {
  // create group
  create(req: Request, res: Response) {
    try {
      // create group
      res.status(201).json({ message: "Group created" });
    } catch (err) {
      res.status(500).json({ message: "Something broke!" });
    }
  }

  // get group
  get(req: Request, res: Response) {
    try {
      // get group
      res.status(200).json({ message: "Group retrieved" });
    } catch (err) {
      res.status(500).json({ message: "Something broke!" });
    }
  }

  // list groups
  list(req: Request, res: Response) {
    try {
      // list groups
      res.status(200).json([{ id: 1, name: "Group 1" }]);
    } catch (err) {
      res.status(500).json({ message: "Something broke!" });
    }
  }

  // update group
  update(req: Request, res: Response) {
    try {
      // update group
      res.status(200).json({ message: "Group updated" });
    } catch (err) {
      res.status(500).json({ message: "Something broke!" });
    }
  }

  // delete group
  delete(req: Request, res: Response) {
    try {
      // delete group
      res.status(204).json({ message: "Group deleted" });
    } catch (err) {
      res.status(500).json({ message: "Something broke!" });
    }
  }
}

export { GroupController };

const express = require("express");
const router = express.Router();
const noteController = require("../controllers/note.controller");

router.post("/", noteController.createNote);
router.post("/bulk", noteController.createBulkNotes);
router.get("/", noteController.getAllNotes);
router.get("/:id", noteController.getNoteById);


module.exports = router;

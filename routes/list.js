// const router = require("express").Router();
// const User = require("../models/user");
// const List = require("../models/list");

// //create
// router.post("/addTask", async (req, res) => {
//   try {
//     const { title, body, id } = req.body;
//     const existingUser = await User.findById(id);
//     if (existingUser) {
//       const list = new List({ title, body, user: existingUser });
//       await list.save().then(() => res.status(200).json({ list }));
//       existingUser.list.push(list);
//       existingUser.save();
//     }
//   } catch (error) {
//     console.log(error);
//   }
// });

// //update
// router.put("/updateTask/:id", async (req, res) => {
//   try {
//     const { title, body } = req.body;
//     const list = await List.findByIdAndUpdate(req.params.id, { title, body });
//     list.save().then(() => res.status(200).json({ message: "Task Updated" }));
//   } catch (error) {
//     console.log(error);
//   }
// });

// //delete
// router.delete("/deleteTask/:id", async (req, res) => {
//   try {
//     const { id } = req.body;
//     const existingUser = await User.findByIdAndDelete(id,
//       {$pull:{list:req.params.id}}
//     );
//     if (existingUser) {
//       await List.findByIdAndDelete(req.params.id).then(() =>
//         res.status(200).json({ message: "Task Deleted" })
//       );
//     }
//   } catch (error) {
//     console.log(error);
//   }
// });

// //getTask
// router.get("/getTasks/:id", async (req, res) => {
//   try {
//     const list = await List.find({ user: req.params.id }).sort({
//       createdAt: -1,
//     });
//     if (list.length !== 0) {
//       res.status(200).json({ list: list });
//     }
//   } catch (error) {
//     console.log(error);
//   }
// });

// module.exports = router;



const router = require("express").Router();
const User = require("../models/user");
const List = require("../models/list");

// Add Task Route
router.post("/addTask", async (req, res) => {
  try {
    const { title, body, id } = req.body;
    const existingUser = await User.findById(id);
    if (existingUser) {
      const list = new List({ title, body, user: existingUser });
      await list.save();
      existingUser.list.push(list);
      await existingUser.save();
      res.status(200).json({ list });
    }
  } catch (error) {
    res.status(500).json({ message: "Error adding task" });
  }
});

// Update Task Route
router.put("/updateTask/:id", async (req, res) => {
  try {
    const { title, body } = req.body;
    const list = await List.findByIdAndUpdate(req.params.id, { title, body });
    await list.save();
    res.status(200).json({ message: "Task Updated" });
  } catch (error) {
    res.status(500).json({ message: "Error updating task" });
  }
});

// Delete Task Route
router.delete("/deleteTask/:id", async (req, res) => {
  try {
    await List.findByIdAndDelete(req.params.id);
    await User.updateOne(
      { list: req.params.id },
      { $pull: { list: req.params.id } }
    );
    res.status(200).json({ message: "Task Deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting task" });
  }
});

// Get Tasks Route
router.get("/getTasks/:id", async (req, res) => {
  try {
    const list = await List.find({ user: req.params.id }).sort({ createdAt: -1 });
    res.status(200).json({ list });
  } catch (error) {
    res.status(500).json({ message: "Error fetching tasks" });
  }
});

module.exports = router;

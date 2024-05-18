const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

// find all categories
router.get("/", async (req, res) => {
  try {
    const categories = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// find one category by its `id` value
router.get("/:id", async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    if (!category) {
      res.status(404).json({ message: "Category not found with this id" });
      return;
    }
    res.status(200).json(category);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// create a new category
router.post("/", async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// update a category by its `id` value
router.put("/:id", async (req, res) => {
  try {
    const updatedCategory = await Category.update(req.body, {
      where: { id: req.params.id },
    });
    if (updatedCategory[0] === 0) {
      res.status(404).json({
        message:
          "Category not found with this id or no update needed with the same data provided",
      });
      return;
    }
    res.status(200).json({ message: "Category updated successfully" });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// delete a category by its `id` value
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Category.destroy({
      where: { id: req.params.id },
    });
    if (deleted === 0) {
      res.status(404).json({ message: "Category not found with this id" });
      return;
    }
    res.status(200).json({ message: "Category deleted successfully" });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;

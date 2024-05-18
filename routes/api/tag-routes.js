const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

// find all tags
router.get("/", async (req, res) => {
  try {
    const tags = await Tag.findAll({
      include: [
        {
          model: Product,
          through: ProductTag,
          as: "productTag_product",
        },
      ],
    });
    res.status(200).json(tags);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Could not get tags" });
  }
});

// find a single tag by its `id`
router.get("/:id", async (req, res) => {
  try {
    const tag = await Tag.findByPk(req.params.id, {
      include: [
        {
          model: Product,
          through: ProductTag,
          as: "productTag_product",
        },
      ],
    });

    if (!tag) {
      res.status(404).json({ message: "No tag with this id was found" });
      return;
    }

    res.status(200).json(tag);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Could not get tag" });
  }
});

// create a new tag
router.post("/", async (req, res) => {
  try {
    const newTag = await Tag.create(req.body);
    res.status(201).json(newTag);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: "The new label could not be created" });
  }
});

// update a tag's name by its `id` value
router.put("/:id", async (req, res) => {
  try {
    const updatedTag = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!updatedTag[0]) {
      res.status(404).json({ message: "No tag with this id was found" });
      return;
    }

    res.status(200).json({ message: "Label updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "The tag could not be updated" });
  }
});

// delete on tag by its `id` value
router.delete("/:id", async (req, res) => {
  try {
    const deletedTag = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!deletedTag) {
      res.status(404).json({ message: "No tag with this id was found" });
      return;
    }

    res.status(200).json({ message: "Label successfully removed" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Could not remove tag" });
  }
});

module.exports = router;

const productModel = require("../model/productModel");
// productPostController
const postProduct = async (req, res) => {
  const data = req.body;
  const product = new productModel(data);
  await product
    .save()
    .then((product) => {
      // console.log(product);
      res.send("Post created");
    })
    .catch((error) => {
      // console.log(error);
      res.send("Error");
    });
  // productModel
};
// get product category
const getProductCategory = async (req, res) => {
  try {
    let categorys = await productModel.aggregate([
      {
        $group: {
          _id: "$category",
          total: { $count: {} },
        },
      },
      {
        $sort: {
          _id: 1,
        },
      },
    ]);
    res.status(200).send(categorys);
  } catch (error) {
    res.status(400).send(error);
  }
};
// getAllProduct by fillter
const getAllProduct = async (req, res) => {
  const { searchText, perPage, pageNumber } = req.params;

  try {
    let searchKeyword = searchText;
    let perPageTottal = Number(perPage);
    let numberOfPage = Number(pageNumber);
    let searchRegex = { $regex: searchKeyword, $options: "i" };
    let skip = (numberOfPage - 1) * perPageTottal;
    let data;
    let query = {
      $or: [
        { category: searchRegex },
        { brand: searchRegex },
        { price: searchRegex },
        { description: searchRegex },
        { product_code: searchRegex },
        {
          remarks: searchRegex,
        },
      ],
    };
    // MATH ROULES...
    // (BODMAS)
    // B= brakts
    // O= Order
    // D= division /
    // M= mainus -
    // A= addition +
    // S= subtraction
    if (searchText !== "null") {
      data = await productModel.aggregate([
        {
          $facet: {
            total: [
              {
                $match: query,
              },
              { $skip: skip },
              {
                $limit: perPageTottal,
              },
              { $count: "total" },
            ],
            rows: [
              { $match: query },
              { $skip: skip },
              { $limit: perPageTottal },
            ],
          },
        },
      ]);
    } else {
      //
      data = await productModel.aggregate([
        {
          $facet: {
            total: [
              { $skip: skip },
              {
                $limit: perPageTottal,
              },
              { $count: "total" },
            ],
            rows: [{ $skip: skip }, { $limit: perPageTottal }],
          },
        },
      ]);
    }
    if (data) {
      res.send(data);
    } else {
      res.status(500);
    }
  } catch (error) {
    res.send(error);
  }
};

//
module.exports = { postProduct, getAllProduct, getProductCategory };

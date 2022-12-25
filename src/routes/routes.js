const AddItemHandler = require("../handler/AddItemHandler");
const DeleteItemHandler = require("../handler/DeleteItemHandler");
const GetItemHandler = require("../handler/GetItemHandler");
const UpdateItemHandler = require("../handler/UpdateItemHandler");

const routes = [
  {
    method: "POST",
    path: "/additem",
    handler: AddItemHandler,
  },
  {
    method: "DELETE",
    path: "/deleteitem/{id}",
    handler: DeleteItemHandler,
  },
  {
    method: "GET",
    path: "/getitem",
    handler: GetItemHandler,
  },
  {
    method: "UPDATE",
    path: "/updateitem/{id}",
    handler: UpdateItemHandler,
  },
];

module.exports = routes;

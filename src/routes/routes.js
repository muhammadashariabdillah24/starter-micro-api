const AddItemHandler = require("../handler/AddItemHandler");
const DeleteItemHandler = require("../handler/DeleteItemHandler");
const GetItemHandler = require("../handler/GetItemHandler");
const {
  OrderItemByDate,
  OrderItemByName,
} = require("../handler/OrderItemHandler");
const SearchItemHandler = require("../handler/SearchItemHandler");
const UpdateItemHandler = require("../handler/UpdateItemHandler");
const PresentaseItemHandler = require("../handler/PresentaseItemHandler");

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
    path: "/searchitem/{name}",
    handler: SearchItemHandler,
  },
  {
    method: "GET",
    path: "/getitem",
    handler: GetItemHandler,
  },
  {
    method: "GET",
    path: "/orderbyname",
    handler: OrderItemByName,
  },
  {
    method: "GET",
    path: "/orderbydate",
    handler: OrderItemByDate,
  },
  {
    method: "GET",
    path: "/presentaseitemhandler",
    handler: PresentaseItemHandler,
  },
  {
    method: "PUT",
    path: "/updateitem/{id}",
    handler: UpdateItemHandler,
  },
];

module.exports = routes;

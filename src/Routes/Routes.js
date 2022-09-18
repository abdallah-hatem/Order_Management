import AddInventory from "../Pages/AddInventory";
import AddProduct from "../Pages/AddProduct";
import InventoryReceive from "../Pages/InventoryReceive";
import ManageInventories from "../Pages/ManageInventories";
import ManageProducts from "../Pages/ManageProducts";
import ProductionOrder from "../Pages/ProductionOrder";
import ProductDetails from "../Pages/ProductDetails";
import Orders from "../Pages/Orders";
import AddRecipe from "../Pages/AddRecipe";
import ManageRecipes from "../Pages/ManageRecipes";
import Order from "../Pages/Order/Order";

export const routes = [
  {
    title: "Products",
    data: [
      {
        title: "Add Product",
        path: "/add-product",
        component: <AddProduct />,
      },
      {
        title: "Manage Products",
        path: "/manage-products",
        component: <ManageProducts />,
      }
    ]
  },
  {
    title: "Inventory",
    data: [
      {
        title: "Add Inventory",
        path: "/add-inventory",
        component: <AddInventory />,
      },
      {
        title: "Manage Inventory",
        path: "/manage-inventories",
        component: <ManageInventories />,
      },
      {
        title: "Inventory Receive",
        path: "/inventory-receive",
        component: <InventoryReceive />,
      },
    ]
  },
  {
    title: "Orders",
    data: [
      {
        title: "Production Order",
        path: "/production-order",
        component: <ProductionOrder />,
      },
      {
        title: "Orders",
        path: "/orders",
        // component: <Orders />,
        component: <Order />,
      }
    ]
  },
  {
    title: "Recipes",
    data: [
      {
        title: "Add Recipes",
        path: "/add-recipes",
        component: <AddRecipe />,
      },
      {
        title: "Manage Recipes",
        path: "/manage-recipes",
        component: <ManageRecipes />,
      }
    ]
  },
]

export const singleRoutes = [
  {
    path: "/product-details/:id",
    component: <ProductDetails />,
  }
]

import AddInventory from "../Pages/Inventory/AddInventory";
import AddProduct from "../Pages/Products/AddProduct";
import InventoryReceive from "../Pages/Inventory/InventoryReceive";
import ManageInventories from "../Pages/Inventory/ManageInventories";
import ManageProducts from "../Pages/Products/ManageProducts";
import ProductionOrder from "../Pages/Order/ProductionOrder";
import ProductDetails from "../Pages/Products/ProductDetails";
import AddRecipe from "../Pages/Recipes/AddRecipe";
import ManageRecipes from "../Pages/Recipes/ManageRecipes";
import Order from "../Pages/Order/Order";
import AddCategory from "../Pages/Categories/AddCategory";
import ManageCategories from "../Pages/Categories/ManageCategories";
import AddUnit from "../Pages/Units/AddUnit";
import ManageUnits from "../Pages/Units/ManageUnits";
import Login from "../Pages/Login/Login";

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
        title: "Manage Inventories",
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
    title: "Categories",
    data: [
      {
        title: "Add Category",
        path: "/add-category",
        component: <AddCategory />,
      },
      {
        title: "Manage Categories",
        path: "/manage-categories",
        component: <ManageCategories />,
      }
    ]
  },
  {
    title: "Units",
    data: [
      {
        title: "Add Unit",
        path: "/add-unit",
        component: <AddUnit />,
      },
      {
        title: "Manage Units",
        path: "/manage-units",
        component: <ManageUnits />,
      }
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
  },
  {
    path: "/login",
    component: <Login />,
  }
]

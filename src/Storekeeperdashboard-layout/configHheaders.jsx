export const headerConfigs = {
  "/storekeeper/my-orders": {
    title: "Order Management",
    subtitle: "View and manage all customers orders",
  },
  "/storekeeper/product-management": {
    title: "Product Management",
    subtitle: "Manage your grocery store inventory",
  },
  "/storekeeper/settings": {
    title: "Settings",
    subtitle: "",
  },
  "/storekeeper/settings/profile-settings": {
    title: "Settings",
    subtitle: "",
  },
  "/storekeeper/settings/store-information": {
    title: "Settings",
    subtitle: "",
  },
  "/storekeeper/my-orders/view-orders": {
    title: "View Orders",
    subtitle: "View and manage all customers orders",
  },
  "/storekeeper/product-management/add-product": {
    title: "Add New Product",
    subtitle: "Manage your grocery store inventory",
  },
  "/storekeeper/product-management/bulk-product": {
    title: "Add Bulk Product",
    subtitle: "Manage your grocery store bulk inventory",
  },
  "/storekeeper/product-management/bulkadd": {
    title: "Add Bulk Product",
    subtitle: "Manage your grocery store bulk inventory",
  },

  default: {
    title: "Dashboard Overview",
    subtitle: "Welcome back Here's what happening today",
  },
};

export const getHeaderConfig = (pathname) => {
    return headerConfigs[pathname] || headerConfigs.default;
};

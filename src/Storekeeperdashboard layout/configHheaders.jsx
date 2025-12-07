export const headerConfigs = {
  "/storekeeper/my-orders": {
    title: "Order Management",
    subtitle: "View and manage all customers orders",
  },
  "/storekeeper/product-management": {
    title: "Product Management",
    subtitle: "anage your grocery store inventory",
  },
  "/storekeeper/settings": {
    title: "Dashboard Overview",
    subtitle: "Welcome back Here's what happening today",
  },

  "default": {
    title: "Dashboard Overview",
    subtitle: "Welcome back Here's what happening today",
  },
};

export const getHeaderConfig = (pathname) => {
    return headerConfigs[pathname] || headerConfigs.default;
};

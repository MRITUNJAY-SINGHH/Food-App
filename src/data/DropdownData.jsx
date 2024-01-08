export const vendorsDropdownData = {
   title: 'Vendors',
   items: [
      { name: 'Vendors Grid', link: '/vendors-grid' },
      { name: 'Vendors List', link: '/vendors-list' },
      { name: 'Vendor Details 01', link: '/vendor-details-01' },
      { name: 'Vendor Details 02', link: '/vendor-details-02' },
      { name: 'Vendor Dashboard', link: '/vendor-dashboard' },
      { name: 'Vendor Guide', link: '/vendor-guide' },
   ],
};

export const shopDropdownData = {
   title: 'Shop',
   items: [
      { name: 'Shop Grid – Right Sidebar', link: '/shop-grid-right' },
      { name: 'Shop Grid – Left Sidebar', link: '/shop-grid-left' },
      { name: 'Shop List – Right Sidebar', link: '/shop-list-right' },
      { name: 'Shop List – Left Sidebar', link: '/shop-list-left' },
      { name: 'Shop - Wide', link: '/shop-fullwidth' },
      {
         name: 'Single Product',
         link: '/single-product',
         submenu: [
            { name: 'Product – Right Sidebar', link: '/shop-product-right' },
            { name: 'Product – Left Sidebar', link: '/shop-product-left' },
            { name: 'Product – No sidebar', link: '/shop-product-full' },
            { name: 'Product – Vendor Info', link: '/shop-product-vendor' },
         ],
      },
      { name: 'Shop – Filter', link: '/shop-filter' },
      { name: 'Shop – Wishlist', link: '/shop-wishlist' },
      { name: 'Shop – Cart', link: '/shop-cart' },
      { name: 'Shop – Checkout', link: '/shop-checkout' },
      { name: 'Shop – Compare', link: '/shop-compare' },
      {
         name: 'Shop Invoice',
         link: '/shop-invoice',
         submenu: [
            { name: 'Shop Invoice 1', link: '/shop-invoice-1' },
            { name: 'Shop Invoice 2', link: '/shop-invoice-2' },
            { name: 'Shop Invoice 3', link: '/shop-invoice-3' },
            { name: 'Shop Invoice 4', link: '/shop-invoice-4' },
            { name: 'Shop Invoice 5', link: '/shop-invoice-5' },
            { name: 'Shop Invoice 6', link: '/shop-invoice-6' },
         ],
      },
   ],
};

export const blogDropdownData = {
   title: 'Blog',
   items: [
      { name: 'Blog Category Grid', link: '/blog-category-grid' },
      { name: 'Blog Category List', link: '/blog-category-list' },
      { name: 'Blog Category Big', link: '/blog-category-big' },
      { name: 'Blog Category Wide', link: '/blog-category-fullwidth' },
      {
         name: 'Single Post',
         link: '/single-post',
         submenu: [
            { name: 'Left Sidebar', link: '/blog-post-left' },
            { name: 'Right Sidebar', link: '/blog-post-right' },
            { name: 'No Sidebar', link: '/blog-post-fullwidth' },
         ],
      },
   ],
};

export const pagesDropdownData = {
   title: 'Pages',
   items: [
      { name: 'About Us', link: '/page-about.html' },
      { name: 'Contact', link: '/page-contact.html' },
      { name: 'My Account', link: '/page-account.html' },
      { name: 'Login', link: '/page-login.html' },
      { name: 'Register', link: '/page-register.html' },
      { name: 'Forgot password', link: '/page-forgot-password.html' },
      { name: 'Reset password', link: '/page-reset-password.html' },
      { name: 'Purchase Guide', link: '/page-purchase-guide.html' },
      { name: 'Privacy Policy', link: '/page-privacy-policy.html' },
      { name: 'Terms of Service', link: '/page-terms.html' },
      { name: '404 Page', link: '/page-404.html' },
   ],
};

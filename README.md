# MobileDev-Store-App
Mobile Shopping App Project
by Andrew Ferrand

This mobile application is designed to provide users with a seamless shopping experience from browsing electronic products to checkout. 
It includes features like user authentication, product browsing, a shopping cart, order management, and user profiles.

Project Structure

  -  App.js: Root component that sets up navigation and global context.
  -  components/: Contains reusable components like Home, Cart, ProductInfo, Checkout, and Orders.
  -  screens/: Contains screens like LoginScreen and RegisterScreen for user authentication.
  -  firebase/: Configuration files for Firebase integration.
  -  constants.js: Contains static data like product listings.
  -  store.js: Manages application state using React's useReducer.


Installation Instructions

1) On Snack Expo, create a new Snack. In the new Snack, delete all of the files and folders except for App.js and package.json as they can't be deleted.
2) Extract the contents of the project from the downloaded zip folder.
3) Copy the code from App.js and package.json from the project and replace the code in Snack. 
   (Make sure the Expo version is set to v50.0.0, which you can check on the bottom right)
4) Click the triple dot icon and select "Import files". Drop the files and folders from the project (except for App.js and package.json) onto the screen and select the Import button.

Note: It is recommended to launch the app using either the Android emulator, the iOS emulator, or your own device. Attempting to launch the app on Web may display errors.


Usage Guidelines

  -  Login/Registration: Access the application features by signing up or logging in through the designated screens.
  -  Viewing Products: Navigate through the product listings on the Home screen.
  -  Adding Products to Cart: Add products to your cart from the ProductInfo screen.
  -  Managing Cart: View and manage your shopping cart, update quantities, or proceed to checkout.
  -  Checkout: Provide shipping information and select a payment method to place an order.
  -  User Profile: View user information and sign out from the UserProfile screen.

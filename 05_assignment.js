// Que5. You are building a shipping application. Write a program that takes the type of package ("standard",
//     "express", or "overnight") and uses a switch statement to calculate and print the estimated delivery time
//     based on the package type. For example, "standard" might take 3-5 days, "express" 1-2 days, and
//     "overnight" would be delivered the next day.

// Sol:

function calculateDeliveryTime(packageType) {
  let deliveryTime;

  // Using switch statement to determine delivery time
  switch (packageType.toLowerCase()) {
    case "standard":
      deliveryTime = "3-5 days";
      break;
    case "express":
      deliveryTime = "1-2 days";
      break;
    case "overnight":
      deliveryTime = "Next day";
      break;
    default:
      deliveryTime = "Unknown package type";
  }

  // Printing the estimated delivery time
  console.log(`Estimated delivery time for ${packageType}: ${deliveryTime}`);
}

// Test the function with different package types
calculateDeliveryTime("standard"); // "Estimated delivery time for standard: 3-5 days"
calculateDeliveryTime("express"); // "Estimated delivery time for express: 1-2 days"
calculateDeliveryTime("overnight"); // "Estimated delivery time for overnight: Next day"
calculateDeliveryTime("economy"); // "Estimated delivery time for economy: Unknown package type"

//   Explanation:
//   packageType.toLowerCase():

//   Converts the input package type to lowercase to ensure that the switch statement is case-insensitive.
//   Switch Statement:

//   case 'standard': Sets the delivery time to "3-5 days" for standard shipping.
//   case 'express': Sets the delivery time to "1-2 days" for express shipping.
//   case 'overnight': Sets the delivery time to "Next day" for overnight shipping.
//   default: Handles any package types that don't match the expected options, setting the delivery time to "Unknown package type".

import {onRequest} from "firebase-functions/v2/https";
import {initializeApp} from "firebase-admin/app";
import {getFirestore, FieldValue} from "firebase-admin/firestore";

initializeApp();

const db = getFirestore();

export const helloWorld = onRequest((request, response) => {
  const name = request.query.name || "Guest";
  response.send(`Hello ${name}!`);
});

export const createOrder = onReqinuest(async (request, response) => {
  try {
    const customerName = request.body.customerName;
    const item = request.body.item;

    if (!customerName) {
      response.status(400).json({
        success: false,
        message: "Customer name is required",
      });
      return;
    }

    if (!item) {
      response.status(400).json({
        success: false,
        message: "Item is required",
      });
      return;
    }

    const orderRef = await db.collection("orders").add({
      customerName,
      item,
      status: "Pending",
      createdAt: FieldValue.serverTimestamp(),
    });

    console.log(orderRef.id);

    response.status(200).json({
      success: true,
      message: "Order created successfully",
      orderId: orderRef.id,
    });
  } catch (error) {
    console.error(error);

    response.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

export const getRewards = onRequest((request, response) => {
  try {
    const userId = request.query.userId;
    console.log(`Fetching rewards for user ID: ${userId}`);

    if (!userId) {
      response.status(400).json({
        success: false,
        message: "User ID is required",
      });
      return;
    }

    response.status(200).json({
      success: true,
      rewards: [
        "Free Coffee",
        "10% Cashback",
        "Movie Voucher",
      ],
    });
  } catch (error) {
    console.error(error);

    response.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

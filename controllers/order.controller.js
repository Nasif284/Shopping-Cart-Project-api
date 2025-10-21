import {
  AddReviewService,
  approveReturnRequest,
  cancelOrderByUserService,
  downloadInvoiceService,
  getAdminOrdersByItemsService,
  getAdminOrdersService,
  getFailedOrderService,
  getOrderItemByIdService,
  getOrderItemsByOrderIdService,
  getOrdersService,
  getOrdersStatusChartDataService,
  getReturnRequests,
  getRevenueChartDataService,
  getReviewsService,
  getSalesChartDataService,
  getSalesReportService,
  getTopSellingBrandsService,
  getTopSellingCategoriesService,
  getTopSellingProductsService,
  orderWithWalletService,
  placeOrderService,
  rejectReturnRequest,
  retryFailedOrderService,
  retryFailedOrderWithWalletService,
  returnRequestService,
  updateOrderStatusService,
} from "../services/order.service.js";
import { STATUS_CODES } from "../utils/statusCodes.js";
import ExcelJS from "exceljs";
import PDFDocument from "pdfkit";
import fs from "fs";
import path from "path";
import crypto from "crypto";
import { createRazorpayOrderService } from "../services/product.service.js";
import paypal from "paypal-rest-sdk";

paypal.configure({
  mode: "sandbox",
  client_id: process.env.PAYPAL_CLIENT_ID,
  client_secret: process.env.PAYPAL_CLIENT_SECRET,
});

export const placeOrder = async (req, res) => {
  const userId = req.userId;
  const body = req.body;
  const order = await placeOrderService(userId, body);
  res.status(STATUS_CODES.OK).json({
    success: true,
    error: false,
    order,
  });
};

export const getOrders = async (req, res) => {
  const page = parseInt(req.query.page);
  const perPage = parseInt(req.query.perPage);
  const userId = req.userId;
  const { orders, totalPages, totalPosts } = await getOrdersService(userId, page, perPage);
  res.status(STATUS_CODES.OK).json({
    success: true,
    error: false,
    orders,
    page,
    perPage,
    totalPages,
    totalPosts,
  });
};

export const getOrderItemById = async (req, res) => {
  const id = req.params.id;
  const { order, displayItem, relatedItems } = await getOrderItemByIdService(id);
  res.status(STATUS_CODES.OK).json({
    success: true,
    error: false,
    order,
    displayItem,
    relatedItems,
  });
};

export const downloadInvoice = async (req, res) => {
  const id = req.params.id;
  await downloadInvoiceService(id, res);
};

export const getAdminOrdersController = async (req, res) => {
  const page = parseInt(req.query.page);
  const perPage = parseInt(req.query.perPage);
  const query = req.query;
  const { orders, totalPosts } = await getAdminOrdersService(page, perPage, query);
  res.status(STATUS_CODES.OK).json({
    success: true,
    error: false,
    orders,
    totalPosts,
    page,
    perPage,
  });
};

export const getOrderItemsByOrderId = async (req, res) => {
  const id = req.params.id;
  const order = await getOrderItemsByOrderIdService(id);
  res.status(STATUS_CODES.OK).json({
    success: true,
    error: false,
    order,
  });
};

export const updateOrderStatus = async (req, res) => {
  const id = req.params.id;
  const status = req.body.status;
  const order = await updateOrderStatusService(id, status);
  res.status(STATUS_CODES.OK).json({
    success: true,
    error: false,
    order,
  });
};

export const getAdminOrdersByItems = async (req, res) => {
  const page = parseInt(req.query.page);
  const perPage = parseInt(req.query.perPage);
  const { orderItems, totalPosts } = await getAdminOrdersByItemsService(req.query, page, perPage);
  res.status(STATUS_CODES.OK).json({
    success: true,
    error: false,
    orderItems,
    totalPosts,
    page,
    perPage,
  });
};

export const cancelOrderByUser = async (req, res) => {
  const id = req.params.id;
  const reason = req.body.reason;
  const order = await cancelOrderByUserService(id, reason);
  res.status(STATUS_CODES.OK).json({
    success: true,
    error: false,
    order,
  });
};

export const returnRequestController = async (req, res) => {
  const id = req.params.id;
  const reason = req.body.reason;
  const order = await returnRequestService(id, reason);
  res.status(STATUS_CODES.OK).json({
    success: true,
    error: false,
    order,
  });
};

export const approveReturnRequestController = async (req, res) => {
  const id = req.params.id;
  const order = await approveReturnRequest(id);
  res.status(STATUS_CODES.OK).json({
    success: true,
    error: false,
    order,
  });
};
export const rejectReturnRequestController = async (req, res) => {
  const id = req.params.id;
  const order = await rejectReturnRequest(id);
  res.status(STATUS_CODES.OK).json({
    success: true,
    error: false,
    order,
  });
};

export const getReturnRequestsController = async (req, res) => {
  const page = parseInt(req.query.page);
  const perPage = parseInt(req.query.perPage);
  const { orders, totalPosts } = await getReturnRequests(page, perPage, req.query);
  res.status(STATUS_CODES.OK).json({
    success: true,
    error: false,
    orders,
    totalPosts,
    page,
    perPage,
  });
};

export const AddReviewController = async (req, res) => {
  const userId = req.userId;
  const id = req.params.id;
  const product = await AddReviewService(userId, id, req.body);
  res.status(STATUS_CODES.OK).json({
    success: true,
    error: false,
    product,
  });
};

export const getReviewsOController = async (req, res) => {
  const id = req.params.id;
  const reviews = await getReviewsService(id);
  res.status(STATUS_CODES.OK).json({
    success: true,
    error: false,
    reviews,
  });
};

export const getSalesReportController = async (req, res) => {
  const filter = req.query.type;
  const startDate = req.query.startDate;
  const endDate = req.query.endDate;
  const year = req.query.year;
  const month = req.query.month;
  const {
    totalAmount,
    totalDiscount,
    totalPrice,
    salesCount,
    cancelCount,
    cancelSum,
    returnCount,
    returnSum,
    totalRevenue,
    couponDeduction,
  } = await getSalesReportService(filter, startDate, endDate, year, month);
  res.status(STATUS_CODES.OK).json({
    success: true,
    error: false,
    totalAmount,
    totalDiscount,
    totalPrice,
    salesCount,
    cancelCount,
    cancelSum,
    returnCount,
    returnSum,
    couponDeduction,
    totalRevenue,
  });
};

export const downloadSalesReportExcel = async (req, res) => {
  const { type, startDate, endDate, year, month } = req.query;
  const reportData = await getSalesReportService(type, startDate, endDate, year, month);

  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Sales Report");

  worksheet.columns = [
    { header: "Total Amount", key: "totalAmount", width: 20 },
    { header: "Total Discount", key: "totalDiscount", width: 20 },
    { header: "Total Price", key: "totalPrice", width: 20 },
    { header: "Sales Count", key: "salesCount", width: 15 },
    { header: "Coupon Deduction", key: "couponDeduction", width: 20 },
    { header: "Cancelled Count", key: "cancelCount", width: 20 },
    { header: "Cancelled Sum", key: "cancelSum", width: 20 },
    { header: "Returned Count", key: "returnCount", width: 20 },
    { header: "Returned Sum", key: "returnSum", width: 20 },
    { header: "Final Revenue", key: "totalRevenue", width: 20 },
  ];

  worksheet.addRow(reportData);

  const filePath = path.join("uploads", `Sales_Report_${Date.now()}.xlsx`);
  await workbook.xlsx.writeFile(filePath);

  res.download(filePath, "Sales_Report.xlsx", (err) => {
    if (err) console.error(err);
    fs.unlinkSync(filePath);
  });
};

export const downloadSalesReportPDF = async (req, res) => {
  const { type, startDate, endDate, year, month } = req.query;
  const reportData = await getSalesReportService(type, startDate, endDate, year, month);

  const doc = new PDFDocument({ margin: 40 });
  const filePath = path.join("uploads", `Sales_Report_${Date.now()}.pdf`);
  const writeStream = fs.createWriteStream(filePath);
  doc.pipe(writeStream);
  doc.fontSize(18).text("Sales Report", { align: "center" });
  doc.moveDown();

  Object.entries(reportData).forEach(([key, value]) => {
    doc.fontSize(12).text(`${key.replace(/([A-Z])/g, " $1")}: ${value}`, {
      align: "left",
    });
    doc.moveDown(0.3);
  });

  doc.end();

  writeStream.on("finish", () => {
    res.download(filePath, "Sales_Report.pdf", (err) => {
      if (err) console.error(err);
      fs.unlinkSync(filePath);
    });
  });
};

export const createRazorpayOrder = async (req, res) => {
  console.log(req.body);
  const order = await createRazorpayOrderService(req.body);

  res.status(STATUS_CODES.OK).json({
    success: true,
    error: false,
    order,
  });
};
export const verifyRazorpayPayment = async (req, res) => {
  const userId = req.userId;
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature, payload } = req.body;
  console.log(payload);
  if (!razorpay_signature) {
    const order = await placeOrderService(userId, {
      ...payload,
      payment: {
        method: "Online",
        status: "Failed",
        transactionId: razorpay_payment_id,
      },
      filed: true,
    });

    return res.status(STATUS_CODES.BAD_REQUEST).json({
      success: false,
      error: true,
      message: "Payment Failed",
      order,
    });
  }

  const generated_signature = crypto
    .createHmac("sha256", process.env.RAZORPAY_TEST_KEY_SECRET)
    .update(`${razorpay_order_id}|${razorpay_payment_id}`)
    .digest("hex");

  if (generated_signature !== razorpay_signature) {
    const order = await placeOrderService(userId, {
      ...payload,
      payment: { method: "Online", status: "Failed", transactionId: razorpay_payment_id },
      filed: true,
    });
    return res.status(STATUS_CODES.BAD_REQUEST).json({
      success: false,
      error: true,
      message: "Signature Mismatch. Payment Failed.",
      order,
    });
  }

  const order = await placeOrderService(userId, {
    ...payload,
    payment: { method: "Online", status: "Paid", transactionId: razorpay_payment_id },
  });

  return res.status(STATUS_CODES.OK).json({
    success: true,
    message: "Payment Successful",
    order,
  });
};

export const orderWithWallet = async (req, res) => {
  const userId = req.userId;
  const body = req.body;
  const order = await orderWithWalletService(userId, body);
  return res.status(STATUS_CODES.OK).json({
    success: true,
    error: false,
    order,
  });
};

export const createPaypalPayment = async (req, res) => {
  const { total } = req.body;

  const create_payment_json = {
    intent: "sale",
    payer: { payment_method: "paypal" },
    redirect_urls: {
      return_url: "http://localhost:5173/success",
      cancel_url: "http://localhost:5173/cancel",
    },
    transactions: [
      {
        amount: {
          currency: "USD",
          total: total.toString(),
        },
        description: "Order payment on Shopping Cart App",
      },
    ],
  };

  paypal.payment.create(create_payment_json, (error, payment) => {
    if (error) {
      console.error(error);
      return res
        .status(STATUS_CODES.INTERNAL_SERVER_ERROR)
        .json({ success: false, message: "Payment creation failed" });
    } else {
      const approvalUrl = payment.links.find((link) => link.rel === "approval_url").href;
      return res.status(STATUS_CODES.OK).json({ approvalUrl });
    }
  });
};

export const executePaypalPayment = async (req, res) => {
  const { paymentId, PayerID } = req.query;

  const execute_payment_json = {
    payer_id: PayerID,
  };

  paypal.payment.execute(paymentId, execute_payment_json, (error, payment) => {
    if (error) {
      console.error(error.response);
      return res
        .status(STATUS_CODES.INTERNAL_SERVER_ERROR)
        .json({ success: false, message: "Payment execution failed" });
    } else {
      return res.status(STATUS_CODES.OK).json({
        success: true,
        message: "Payment successful",
        payment,
      });
    }
  });
};

export const getFailedOrderController = async (req, res) => {
  const id = req.params.id;
  const order = await getFailedOrderService(id);
  res.status(STATUS_CODES.OK).json({
    success: true,
    error: false,
    order,
  });
};

export const retryFiledRazorpayVerify = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature, id } = req.body;
  const generated_signature = crypto
    .createHmac("sha256", process.env.RAZORPAY_TEST_KEY_SECRET)
    .update(`${razorpay_order_id}|${razorpay_payment_id}`)
    .digest("hex");
  if (!razorpay_signature && generated_signature !== razorpay_signature) {
    return res.status(STATUS_CODES.BAD_REQUEST).json({
      message: "Payment Failed",
    });
  }
  const order = await retryFailedOrderService(req.userId, id, {
    method: "Online",
    status: "Failed",
    transactionId: razorpay_payment_id,
  });
  res.status(STATUS_CODES.OK).json({
    success: true,
    error: false,
    order,
  });
};

export const retryFailedOrderWithCOD = async (req, res) => {
  const { id, payment, items } = req.body;
  const order = await retryFailedOrderService(req.userId, id, payment, items);
  res.status(STATUS_CODES.OK).json({
    success: true,
    error: false,
    order,
  });
};

export const retryFailedOrderWithWallet = async (req, res) => {
  const order = await retryFailedOrderWithWalletService(req.userId, req.body);
  res.status(STATUS_CODES.OK).json({
    success: true,
    error: false,
    order,
  });
};

export const getTopSellingProducts = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const perPage = parseInt(req.query.perPage) || 10;
  const { type, startDate, endDate, year, month } = req.query;
  const { products, totalPosts } = await getTopSellingProductsService(
    page,
    perPage,
    type,
    startDate,
    endDate,
    year,
    month
  );
  return res.status(STATUS_CODES.OK).json({
    success: true,
    error: false,
    page,
    perPage,
    products,
    totalPosts,
  });
};

export const getTopSellingCategories = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const perPage = parseInt(req.query.perPage) || 10;
  const { type, startDate, endDate, year, month } = req.query;
  const { categories, totalPosts } = await getTopSellingCategoriesService(
    page,
    perPage,
    type,
    startDate,
    endDate,
    year,
    month
  );
  return res.status(STATUS_CODES.OK).json({
    success: true,
    error: false,
    page,
    perPage,
    categories,
    totalPosts,
  });
};

export const getTopSellingBrands = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const perPage = parseInt(req.query.perPage) || 10;
  const { type, startDate, endDate, year, month } = req.query;
  const { brands, totalPosts } = await getTopSellingBrandsService(
    page,
    perPage,
    type,
    startDate,
    endDate,
    year,
    month
  );
  return res.status(STATUS_CODES.OK).json({
    success: true,
    error: false,
    page,
    perPage,
    brands,
    totalPosts,
  });
};

export const getRevenueChartData = async (req, res) => {
  const data = await getRevenueChartDataService(req.query);
  return res.status(200).json({ success: true, error: false, data });
};

export const getSalesChartData = async (req, res) => {
  const data = await getSalesChartDataService(req.query);
  return res.status(200).json({ success: true, error: false, data });
};

export const getOrderStatusChartData = async (req, res) => {
  const data = await getOrdersStatusChartDataService(req.query);
  return res.status(200).json({ success: true, error: false, data });
};

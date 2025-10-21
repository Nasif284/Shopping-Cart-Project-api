export const invoiceTemplateGenerate = (order, item, discount) => {
  const subtotal = item.oldPrice * item.quantity;
  const total = item.price * item.quantity;

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body { 
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: #f5f5f5;
            padding: 40px 20px;
            color: #333;
          }
          
          .invoice { 
            max-width: 850px;
            margin: auto;
            background: white;
            box-shadow: 0 0 30px rgba(0,0,0,0.1);
            border-radius: 12px;
            overflow: hidden;
          }
          
          /* Header Section */
          .invoice-header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 40px;
            color: white;
          }
          
          .header-top {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 30px;
          }
          
          .company-info h1 {
            font-size: 32px;
            font-weight: 700;
            margin-bottom: 5px;
            letter-spacing: -0.5px;
          }
          
          .company-tagline {
            font-size: 14px;
            opacity: 0.9;
          }
          
          .invoice-title {
            text-align: right;
          }
          
          .invoice-title h2 {
            font-size: 36px;
            font-weight: 700;
            margin-bottom: 5px;
          }
          
          .invoice-number {
            font-size: 14px;
            opacity: 0.9;
          }
          
          .header-divider {
            height: 2px;
            background: rgba(255,255,255,0.3);
            margin: 20px 0;
          }
          
          /* Info Section */
          .invoice-info {
            padding: 40px;
          }
          
          .info-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            margin-bottom: 40px;
          }
          
          .info-block h3 {
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: #667eea;
            margin-bottom: 10px;
            font-weight: 600;
          }
          
          .info-block p {
            font-size: 14px;
            line-height: 1.6;
            color: #555;
          }
          
          .info-block strong {
            color: #333;
            font-weight: 600;
          }
          
          .address-line {
            margin: 5px 0;
          }
          
          /* Table Section */
          .invoice-table {
            margin: 40px 0;
          }
          
          table {
            width: 100%;
            border-collapse: separate;
            border-spacing: 0;
          }
          
          table thead {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
          }
          
          table th {
            padding: 15px;
            text-align: left;
            font-size: 13px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          
          table th:last-child {
            text-align: right;
          }
          
          table tbody tr {
            border-bottom: 1px solid #eee;
            transition: background 0.2s;
          }
          
          table tbody tr:hover {
            background: #f9f9f9;
          }
          
          table td {
            padding: 20px 15px;
            font-size: 14px;
            color: #555;
          }
          
          table td:last-child {
            text-align: right;
            font-weight: 600;
            color: #333;
          }
          
          .item-name {
            font-weight: 600;
            color: #333;
            font-size: 15px;
          }
          
          .old-price {
            text-decoration: line-through;
            color: #999;
            font-size: 13px;
          }
          
          /* Summary Section */
          .invoice-summary {
            background: #f9f9f9;
            padding: 30px 40px;
            margin-top: 40px;
          }
          
          .summary-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 12px 0;
            font-size: 15px;
            color: #555;
          }
          
          .summary-row.subtotal {
            border-bottom: 1px solid #ddd;
          }
          
          .summary-row.discount {
            color: #e74c3c;
          }
          
          .summary-row.discount .amount {
            color: #e74c3c;
            font-weight: 600;
          }
          
          .summary-row.total {
            margin-top: 10px;
            padding-top: 15px;
            border-top: 2px solid #667eea;
            font-size: 18px;
            font-weight: 700;
            color: #333;
          }
          
          .summary-row.total .amount {
            font-size: 24px;
            color: #667eea;
          }
          
          /* Payment Badge */
          .payment-badge {
            display: inline-block;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
            margin-left: 8px;
          }
          
          .payment-badge.paid {
            background: #d4edda;
            color: #155724;
          }
          
          .payment-badge.pending {
            background: #fff3cd;
            color: #856404;
          }
          
          .payment-badge.failed {
            background: #f8d7da;
            color: #721c24;
          }
          
          .invoice-footer {
            padding: 30px 40px;
            text-align: center;
            background: #f9f9f9;
            border-top: 1px solid #eee;
          }
          
          .footer-message {
            font-size: 16px;
            font-weight: 600;
            color: #667eea;
            margin-bottom: 10px;
          }
          
          .footer-note {
            font-size: 12px;
            color: #999;
            line-height: 1.6;
          }
          
          .footer-contact {
            margin-top: 15px;
            font-size: 12px;
            color: #777;
          }
          
          /* Print Styles */
          @media print {
            body {
              background: white;
              padding: 0;
            }
            
            .invoice {
              box-shadow: none;
              border-radius: 0;
            }
          }
        </style>
      </head>
      <body>
        <div class="invoice">
          <!-- Header -->
          <div class="invoice-header">
            <div class="header-top">
              <div class="invoice-title">
                <h2>INVOICE</h2>
                <p class="invoice-number">#${order.orderId}</p>
              </div>
            </div>
            <div class="header-divider"></div>
          </div>
  
          <!-- Info Section -->
          <div class="invoice-info">
            <div class="info-grid">
              <!-- Customer Info -->
              <div class="info-block">
                <h3>Bill To</h3>
                <p>
                  <strong>${order.shippingAddress.name}</strong><br/>
                  <span class="address-line">${order.shippingAddress.address_line}</span><br/>
                  <span class="address-line">${order.shippingAddress.locality}, ${order.shippingAddress.city}</span><br/>
                  <span class="address-line">${order.shippingAddress.state} - ${order.shippingAddress.pin_code}</span><br/>
                  <span class="address-line">Phone: ${order.shippingAddress.mobile}</span>
                </p>
              </div>
              
              <!-- Order Info -->
              <div class="info-block">
                <h3>Invoice Details</h3>
                <p>
                  <strong>Order ID:</strong> ${order.orderId}<br/>
                  <strong>Invoice Date:</strong> ${new Date(order.createdAt).toLocaleDateString(
                    "en-IN",
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }
                  )}<br/>
                  <strong>Payment Method:</strong> ${order.payment.method}
                  <span class="payment-badge ${order.payment.status.toLowerCase()}">${order.payment.status}</span><br/>
                  ${order.payment.transactionId ? `<strong>Transaction ID:</strong> ${order.payment.transactionId}` : ""}
                </p>
              </div>
            </div>
            
            <!-- Items Table -->
            <div class="invoice-table">
              <table>
                <thead>
                  <tr>
                    <th style="width: 40%">Item Description</th>
                    <th style="width: 15%">Quantity</th>
                    <th style="width: 15%">Original Price</th>
                    <th style="width: 15%">Price</th>
                    <th style="width: 15%">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div class="item-name">${item.name}</div>
                      ${item.variant ? `<div style="font-size: 12px; color: #999; margin-top: 4px;">${item.variant}</div>` : ""}
                    </td>
                    <td>${item.quantity}</td>
                    <td>
                      ${item.oldPrice > item.price ? `<span class="old-price">₹${item.oldPrice.toFixed(2)}</span>` : `₹${item.oldPrice.toFixed(2)}`}
                    </td>
                    <td>₹${item.price.toFixed(2)}</td>
                    <td>₹${(item.price * item.quantity).toFixed(2)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <!-- Summary -->
          <div class="invoice-summary">
            <div class="summary-row subtotal">
              <span>Subtotal</span>
              <span class="amount">₹${subtotal.toFixed(2)}</span>
            </div>
            <div class="summary-row discount">
              <span>Discount Applied</span>
              <span class="amount">-₹${discount.toFixed(2)}</span>
            </div>
            ${
              order.shippingCharge
                ? `
            <div class="summary-row">
              <span>Shipping Charges</span>
              <span class="amount">₹${order.shippingCharge.toFixed(2)}</span>
            </div>
            `
                : ""
            }
            <div class="summary-row total">
              <span>Total Amount</span>
              <span class="amount">₹${total.toFixed(2)}</span>
            </div>
          </div>
          
          <!-- Footer -->
          <div class="invoice-footer">
            <p class="footer-message">Thank you for your business! 🎉</p>
            <p class="footer-note">
              This is a computer-generated invoice and does not require a signature.<br/>
              For any queries, please contact our support team.
            </p>
            <p class="footer-contact">
              Email: support@myshop.com | Phone: +91 1234567890 | Website: www.myshop.com
            </p>
          </div>
        </div>
      </body>
    </html>
  `;
};

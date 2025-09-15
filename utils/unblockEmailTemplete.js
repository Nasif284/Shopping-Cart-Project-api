const accountUnblockedMailTemplate = (name, supportEmail = "support@shoppingcart.com") => {
  const currentYear = new Date().getFullYear();

  return `
  <!DOCTYPE html>
  <html lang="en" style="margin:0;padding:0;">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Account Restored</title>
  </head>
  <body style="margin:0;padding:0;background:#f4f6f8;font-family:Arial,sans-serif;">
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
      <tr>
        <td align="center" style="padding:24px;">
          <table border="0" cellpadding="0" cellspacing="0" width="600" style="max-width:600px;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 6px rgba(0,0,0,.05);">
            
            <!-- Header with Success Icon -->
            <tr>
              <td align="center" style="padding:24px;background:#16a34a;color:#ffffff;font-size:20px;font-weight:600;">
                <div style="margin-bottom:8px;">
                  ✅
                </div>
                Shopping Cart App
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:32px 24px;color:#374151;font-size:16px;line-height:24px;">
                <p style="margin:0 0 16px;">Hi <strong>${name}</strong>,</p>
                
                <div style="background:#f0fdf4;border-left:4px solid #16a34a;padding:16px;margin:16px 0;border-radius:0 8px 8px 0;">
                  <p style="margin:0 0 12px;color:#15803d;font-weight:600;font-size:18px;">Account Access Restored</p>
                  <p style="margin:0;color:#166534;">Great news! Your account has been unblocked and you can now access all features.</p>
                </div>

                <div style="margin:24px 0;">
                  <p style="margin:0 0 12px;font-weight:600;color:#111827;">You can now:</p>
                  <ul style="margin:0;padding-left:20px;color:#4b5563;">
                    <li style="margin:0 0 8px;">Log in to your account normally</li>
                    <li style="margin:0 0 8px;">Access all your saved data</li>
                    <li style="margin:0 0 8px;">Continue shopping and using our services</li>
                  </ul>
                </div>

                <!-- Login Button -->
                <div style="text-align:center;margin:32px 0;">
                  <a href="${process.env.FRONTEND_URL || "https://yourapp.com"}/login" style="display:inline-block;background:#16a34a;color:#ffffff;padding:12px 32px;text-decoration:none;border-radius:8px;font-weight:600;font-size:16px;">
                    Login to Your Account
                  </a>
                </div>

                <div style="background:#f0f9ff;border:1px solid #0ea5e9;border-radius:8px;padding:20px;margin:24px 0;text-align:center;">
                  <p style="margin:0 0 12px;font-weight:600;color:#0369a1;">Questions?</p>
                  <p style="margin:0 0 8px;color:#0369a1;">If you need any assistance, contact us:</p>
                  <a href="mailto:${supportEmail}" style="color:#0ea5e9;text-decoration:none;font-weight:600;">${supportEmail}</a>
                </div>

                <p style="margin:24px 0 0;font-size:14px;color:#6b7280;">Thank you for your patience and welcome back!</p>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td align="center" style="padding:16px;font-size:12px;line-height:18px;color:#9ca3af;background:#f9fafb;">
                © ${currentYear} Shopping Cart App · All rights reserved.<br>
                <span style="color:#6b7280;">This is an automated message regarding your account status.</span>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>
  `;
};
export default accountUnblockedMailTemplate
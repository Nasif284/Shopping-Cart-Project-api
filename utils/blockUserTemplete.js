const accountBlockedMailTemplate = (
  name,
  reason = null,
  supportEmail = "support@shoppingcart.com"
) => {
  const currentYear = new Date().getFullYear();

  return `
  <!DOCTYPE html>
  <html lang="en" style="margin:0;padding:0;">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Account Blocked</title>
  </head>
  <body style="margin:0;padding:0;background:#f4f6f8;font-family:Arial,sans-serif;">
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
      <tr>
        <td align="center" style="padding:24px;">
          <table border="0" cellpadding="0" cellspacing="0" width="600" style="max-width:600px;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 6px rgba(0,0,0,.05);">
            
            <!-- Header with Warning Icon -->
            <tr>
              <td align="center" style="padding:24px;background:#dc2626;color:#ffffff;font-size:20px;font-weight:600;">
                <div style="margin-bottom:8px;">
                  ⚠️
                </div>
                Shopping Cart App
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:32px 24px;color:#374151;font-size:16px;line-height:24px;">
                <p style="margin:0 0 16px;">Hi <strong>${name}</strong>,</p>
                
                <div style="background:#fef2f2;border-left:4px solid #dc2626;padding:16px;margin:16px 0;border-radius:0 8px 8px 0;">
                  <p style="margin:0 0 12px;color:#991b1b;font-weight:600;font-size:18px;">Account Access Suspended</p>
                  <p style="margin:0;color:#7f1d1d;">Your account has been temporarily blocked by our administration team.</p>
                </div>

                ${
                  reason
                    ? `
                <div style="margin:24px 0;">
                  <p style="margin:0 0 8px;font-weight:600;color:#111827;">Reason for blocking:</p>
                  <div style="background:#f9fafb;padding:12px;border-radius:8px;color:#4b5563;border:1px solid #e5e7eb;">
                    ${reason}
                  </div>
                </div>
                `
                    : ""
                }

                <div style="margin:24px 0;">
                  <p style="margin:0 0 12px;font-weight:600;color:#111827;">What this means:</p>
                  <ul style="margin:0;padding-left:20px;color:#4b5563;">
                    <li style="margin:0 0 8px;">You cannot access your account</li>
                    <li style="margin:0 0 8px;">All login attempts will be denied</li>
                    <li style="margin:0 0 8px;">Your account data remains secure</li>
                  </ul>
                </div>

                <div style="margin:24px 0;">
                  <p style="margin:0 0 12px;font-weight:600;color:#111827;">Next steps:</p>
                  <p style="margin:0 0 16px;color:#4b5563;">If you believe this is a mistake or would like to appeal this decision, please contact our support team with your account details.</p>
                </div>

                <!-- Support Contact Box -->
                <div style="background:#f0f9ff;border:1px solid #0ea5e9;border-radius:8px;padding:20px;margin:24px 0;text-align:center;">
                  <p style="margin:0 0 12px;font-weight:600;color:#0369a1;">Need Help?</p>
                  <p style="margin:0 0 8px;color:#0369a1;">Contact our support team:</p>
                  <a href="mailto:${supportEmail}" style="color:#0ea5e9;text-decoration:none;font-weight:600;">${supportEmail}</a>
                </div>

                <p style="margin:24px 0 0;font-size:14px;color:#6b7280;">We appreciate your understanding and cooperation.</p>
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

export default accountBlockedMailTemplate


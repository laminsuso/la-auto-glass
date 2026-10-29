const escapeHtml = (value) => String(value ?? "")
  .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;").replace(/'/g, "&#39;");

export function quoteEmail(data, email) {
  const name = `${data.firstName} ${data.lastName}`;
  const vehicle = `${data.year} ${data.make} ${data.model}`;
  const sections = [
    ["Customer", [["Name", name], ["Email", email], ["Phone", data.phone], ["ZIP code", data.zipCode]]],
    ["Vehicle & service", [["Vehicle", vehicle], ["VIN", data.vin || "Not provided"], ["Glass type", data.glassType], ["Special features", data.specialFeatures || "None"]]],
  ];
  const row = ([label, value]) => `<tr><td style="padding:10px 0;border-bottom:1px solid #e8edf3;font-size:15px;line-height:23px;word-break:break-word;"><span style="color:#596579;font-size:12px;font-weight:bold;">${escapeHtml(label).toUpperCase()}</span><br>${escapeHtml(value)}</td></tr>`;
  const text = `NEW QUOTE REQUEST\n\nRequested appointment (not yet confirmed)\n${data.serviceDate}\n${data.appointmentWindow}\n\n${sections.map(([title, fields]) => `${title}\n${fields.map(([label, value]) => `${label}: ${value}`).join("\n")}`).join("\n\n")}\n\nNotes\n${data.notes || "No notes provided"}\n\nReply to this email to contact the customer.\nLeyvas Auto Glass | leyvasautoglass.com`;
  const html = `<!doctype html>
<html lang="en" dir="ltr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>New quote request — Leyvas Auto Glass</title></head>
<body style="margin:0;padding:0;background-color:#eef2f6;color:#172235;font-family:Arial,Helvetica,sans-serif;">
<div lang="en" dir="ltr" style="display:none;max-height:0;overflow:hidden;mso-hide:all;">New request from ${escapeHtml(name)} · ${escapeHtml(vehicle)} · ${escapeHtml(data.glassType)}</div>
<table lang="en" dir="ltr" role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#eef2f6;"><tr><td align="center" style="padding:24px 12px;">
<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:600px;background-color:#ffffff;border:1px solid #dfe5ed;border-radius:16px;overflow:hidden;">
<tr><td style="background-color:#0b1428;padding:28px 24px;border-bottom:5px solid #ff7200;">
<p style="margin:0 0 22px;color:#ffffff;font-size:16px;font-weight:bold;letter-spacing:2px;">LEYVAS <span style="color:#ff9a47;">AUTO GLASS</span></p>
<p style="margin:0 0 8px;color:#ff9a47;font-size:12px;font-weight:bold;letter-spacing:2px;">WEBSITE INQUIRY</p>
<h1 style="margin:0;color:#ffffff;font-size:28px;line-height:34px;">New quote request</h1>
<p style="margin:10px 0 0;color:#d6dfed;font-size:15px;line-height:23px;">A customer is ready to get back on the road.</p></td></tr>
<tr><td style="padding:24px;">
<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#fff3e8;border-left:4px solid #ff7200;"><tr><td style="padding:18px;">
<h2 style="margin:0 0 10px;font-size:13px;color:#8b3900;">REQUESTED APPOINTMENT</h2>
<p style="margin:0;font-size:18px;font-weight:bold;line-height:26px;">${escapeHtml(data.serviceDate)}</p>
<p style="margin:4px 0 0;font-size:16px;line-height:24px;">${escapeHtml(data.appointmentWindow)}</p>
<p style="margin:10px 0 0;font-size:13px;line-height:20px;color:#704b30;">Preferred window · awaiting your confirmation</p></td></tr></table>
${sections.map(([title, fields]) => `<h2 style="margin:26px 0 4px;font-size:18px;line-height:25px;">${title}</h2><table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">${fields.map(row).join("")}</table>`).join("")}
<h2 style="margin:26px 0 10px;font-size:18px;">Customer notes</h2>
<p style="margin:0;padding:16px;background-color:#f3f6fa;border-radius:8px;font-size:15px;line-height:24px;word-break:break-word;">${escapeHtml(data.notes || "No notes provided").replace(/\r?\n/g, "<br>")}</p>
<table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin-top:26px;"><tr><td bgcolor="#ff7200" style="border-radius:8px;text-align:center;"><a href="mailto:${escapeHtml(encodeURIComponent(email))}" style="display:inline-block;padding:15px 24px;color:#172235;font-size:16px;font-weight:bold;text-decoration:none;">Email customer &rarr;</a></td></tr></table>
<p style="margin:12px 0 0;font-size:13px;line-height:20px;color:#596579;">Or use Reply in Gmail to continue the conversation with the customer.</p>
</td></tr>
<tr><td style="padding:20px 24px;background-color:#f3f6fa;border-top:1px solid #e8edf3;font-size:12px;line-height:20px;color:#596579;">Sent from the <a href="https://leyvasautoglass.com" style="color:#172235;">Leyvas Auto Glass website</a><br>Service request notification · This is not a confirmed booking.</td></tr>
</table></td></tr></table></body></html>`;
  return { html, text };
}

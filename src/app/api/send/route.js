import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();

  try {
    const data = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>" + email,
      to: "Focusguy387@gmail.com",
      subject: subject,
      html: `<body style="background-color:#ffffff; font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Roboto,Oxygen-Sans,Ubuntu,Cantarell,&quot;Helvetica Neue&quot;,sans-serif">
      <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="max-width:37.5em;margin:0 auto;padding:20px 0 48px">
      <tbody>
      <tr style="width:100%">
      <td><img alt="Logo" height="50" src="#" style="display:block;outline:none;border:none;text-decoration:none;margin:0 auto" width="170" />
      <p style="font-size:16px;line-height:26px;margin:16px 0">Hi <!-- -->Admin<!-- -->,</p>
      <p style="font-size:16px;line-height:26px;margin:16px 0">${message}</p>              
      <hr style="width:100%;border:none;border-top:1px solid #eaeaea;border-color:#cccccc;margin:20px 0" />
      <p style="font-size:12px;line-height:24px;margin:16px 0;color:#8898aa">@Your Company International</p>
      </td>
      </tr>
      </tbody>
      </table>
      </body>`,
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}

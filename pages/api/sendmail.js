const nodemailer = require("nodemailer");

import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

export default (req, res) => {
  if (req.method === "POST") {
    const { name, email, phone, message } = req.body;

    let transporter = nodemailer.createTransport({
      service: "SendGrid",
      auth: {
        user: publicRuntimeConfig.SEND_GRID_USERNAME,
        pass: publicRuntimeConfig.SEND_GRID_PASSWORD,
      },
    });

    transporter.sendMail(
      {
        from: `${publicRuntimeConfig.PLATFORM_NAME} <${publicRuntimeConfig.EMAIL_FROM}>`, // sender address
        to: publicRuntimeConfig.Admin_Email, // list of receivers
        subject: "Message Recieved ✔", // Subject line
        text: `Message Sent by ${name} with Email ${email} and Phone ${phone}. "${message}"`, // plain text body
        html: `<p style="font-size:16px">From : ${name}</p>
               <p style="font-size:16px">Email : ${email}</p> 
               <p style="font-size:16px">Phone : ${phone}</p>
               <p style="font-size:16px">Message : ${message}</p>`,
      },
      (error) => {
        if (error) {
          console.log(error);
          res.statusCode = 500;
          res.setHeader("Content-Type", "application/json");
          res.end(
            JSON.stringify({
              status: "error",
              data: {
                error,
              },
            })
          );
        } else {
          transporter.sendMail(
            {
              from: `${publicRuntimeConfig.PLATFORM_NAME} <${publicRuntimeConfig.EMAIL_FROM}>`, // sender address
              to: email, // list of receivers
              subject: "Message Recieved ✔ ✔", // Subject line
              text: `Hello ${name}! Thanks for Contacting us! We have recieved your Request`, // plain text body
              html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
          <html
            xmlns="http://www.w3.org/1999/xhtml"
            xmlns:v="urn:schemas-microsoft-com:vml"
            xmlns:o="urn:schemas-microsoft-com:office:office"
          >
            <head>
              <!--[if gte mso 9]>
                <xml>
                  <o:OfficeDocumentSettings>
                    <o:AllowPNG />
                    <o:PixelsPerInch>96</o:PixelsPerInch>
                  </o:OfficeDocumentSettings>
                </xml>
              <![endif]-->
              <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
              <meta http-equiv="X-UA-Compatible" content="IE=edge" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link
                href="https://fonts.googleapis.com/css?family=Pacifico&display=swap"
                rel="stylesheet"
              />
              <link
                href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
                rel="stylesheet"
              />
              <title></title>
              <style type="text/css">
                p {
                  margin: 0;
                  padding: 0;
                }
                table {
                  border-collapse: collapse;
                }
                h1,
                h2,
                h3,
                h4,
                h5,
                h6 {
                  display: block;
                  margin: 0;
                  padding: 0;
                }
                img,
                a img {
                  border: 0;
                  height: auto;
                  outline: none;
                  text-decoration: none;
                }
                body,
                #bodyTable,
                #bodyCell {
                  height: 100%;
                  margin: 0;
                  padding: 0;
                  width: 100%;
                }
                #outlook a {
                  padding: 0;
                }
                img {
                  -ms-interpolation-mode: bicubic;
                }
                table {
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                }
                .ReadMsgBody {
                  width: 100%;
                }
                .ExternalClass {
                  width: 100%;
                }
                p,
                a,
                li,
                td,
                blockquote {
                  mso-line-height-rule: exactly;
                }
                a[href^="tel"],
                a[href^="sms"] {
                  color: inherit;
                  cursor: default;
                  text-decoration: none;
                }
                p,
                a,
                li,
                td,
                body,
                table,
                blockquote {
                  -ms-text-size-adjust: 100%;
                  -webkit-text-size-adjust: 100%;
                }
                .ExternalClass,
                .ExternalClass p,
                .ExternalClass td,
                .ExternalClass div,
                .ExternalClass span,
                .ExternalClass font {
                  line-height: 100%;
                }
                a[x-apple-data-detectors] {
                  color: inherit !important;
                  text-decoration: none !important;
                  font-size: inherit !important;
                  font-family: inherit !important;
                  font-weight: inherit !important;
                  line-height: inherit !important;
                }
                @media only screen and (max-width: 480px) {
                  .m_device_width {
                    width: 100% !important;
                    min-width: 100% !important;
                    height: auto !important;
                  }
                  .m_db {
                    display: block !important;
                  }
                  .text-center {
                    text-align: center !important;
                  }
                  .mob_hidden {
                    display: none !important;
                  }
                  .mob_ptb80lr20 {
                    padding: 80px 25px !important;
                  }
                  .h_auto {
                    height: auto !important;
                  }
                  .font11 {
                    font-size: 11px !important;
                  }
                  .social_icon {
                    width: 100% !important;
                    min-width: 100% !important;
                    height: auto !important;
                  }
                  .spacer {
                    padding: 0% 5% !important;
                  }
                  .mob_pr12 {
                    padding: 0px 12px 0px 0px !important;
                  }
                  .sm_icon {
                    width: 14px !important;
                  }
                }
              </style>
            </head>
            <body align="center" style="margin:0; padding:0; background:#e5e5e5;">
              <table
                align="center"
                width="100%"
                border="0"
                cellspacing="0"
                cellpadding="0"
                style="background:#e5e5e5"
                id="bodyTable"
              >
                <tr>
                  <td align="center" id="bodyCell">
                    <table
                      align="center"
                      width="100%"
                      border="0"
                      cellspacing="0"
                      cellpadding="0"
                      style="background:#e5e5e5"
                      class="m_device_width"
                    >
                      <tr>
                        <td align="center">
                          <table
                            align="center"
                            width="600"
                            border="0"
                            cellspacing="0"
                            cellpadding="0"
                            style="background:#000000"
                            class="m_device_width"
                          >
                            <tr>
                              <td align="center">
                                <table
                                  align="center"
                                  width="100%"
                                  border="0"
                                  cellspacing="0"
                                  cellpadding="0"
                                >
                                  <tr>
                                    <td align="center">
                                      <a
                                        href="https://dreamlab-development.vercel.app/"
                                        target="_blank"
                                      >
                                        <img
                                          align="center"
                                          src="https://res.cloudinary.com/dxnoiuj66/image/upload/v1601798443/logo_xdwykq.png"
                                          alt="DreamLab Development"
                                          width="600"
                                          height=""
                                          style="width:600px; max-width:600px; display:block;"
                                          class="m_device_width"
                                        />
                                      </a>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
          
                      <tr>
                        <td align="center">
                          <table
                            align="center"
                            width="600"
                            border="0"
                            cellspacing="0"
                            cellpadding="0"
                            style="background:#000000"
                            class="m_device_width"
                          >
                            <tr>
                              <td
                                align="center"
                                background="https://i.imgur.com/OOD0bZL.jpg"
                                bgcolor="#ffffff"
                                width="600"
                                height="617"
                                valign="top"
                                style="background-repeat:no-repeat;"
                                class="h_auto m_device_width"
                              >
                                <!--[if gte mso 9]>
                                              <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width:600px;height:617px;">
                                              <v:fill type="tile" src="https://i.imgur.com/OOD0bZL.jpg" color="#ffffff" />
                                              <v:textbox inset="0,0,0,0">
                                              <![endif]-->
                                <div>
                                  <table
                                    align="center"
                                    width="100%"
                                    border="0"
                                    cellspacing="0"
                                    cellpadding="0"
                                  >
                                    <tr>
                                      <td
                                        align="center"
                                        width="85"
                                        style="width:85px"
                                        class="mob_hidden"
                                      >
                                        <img
                                          align="center"
                                          src="https://i.imgur.com/HR1pI0g.gif"
                                          alt=""
                                          width="85"
                                          style="width:85px; display:block"
                                        />
                                      </td>
                                      <td
                                        align="center"
                                        style="padding:160px 0px"
                                        class="mob_ptb80lr20"
                                      >
                                        <table
                                          align="center"
                                          width="100%"
                                          border="0"
                                          cellspacing="0"
                                          cellpadding="0"
                                          style="background:#0B72B9; border-radius:10px; box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.32);"
                                        >
                                          <tr>
                                            <td
                                              align="center"
                                              style="padding:85px 35px 110px 35px"
                                            >
                                              <table
                                                align="center"
                                                width="100%"
                                                border="0"
                                                cellspacing="0"
                                                cellpadding="0"
                                              >
                                                <tr>
                                                  <td
                                                    align="center"
                                                    style="font-family: 'Pacifico', Tahoma; font-size:34.28px; font-weight:normal; line-height:35px; color:#fff; text-align:center;"
                                                  >
                                                    Hello
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td
                                                    align="center"
                                                    style="padding:20px 0px 0px 0px; font-family: 'Roboto', Tahoma, Segoe, sans-serif; font-size:20px; font-weight:normal; line-height:25.50px; color:#fff; text-align:center;"
                                                  >
                                                    Thanks for sending us a message! We’ll
                                                    get back to you as soon as possible.
                                                  </td>
                                                </tr>
                                              </table>
                                            </td>
                                          </tr>
                                        </table>
                                      </td>
                                      <td
                                        align="center"
                                        width="85"
                                        style="width:85px"
                                        class="mob_hidden"
                                      >
                                        <img
                                          align="center"
                                          src="https://i.imgur.com/HR1pI0g.gif"
                                          alt=""
                                          width="85"
                                          style="width:85px; display:block"
                                        />
                                      </td>
                                    </tr>
                                  </table>
                                </div>
                                <!--[if gte mso 9]>
                                              </v:textbox>
                                              </v:rect>
                                              <![endif]-->
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
          
                      <tr>
                        <td align="center">
                          <table
                            align="center"
                            width="600"
                            border="0"
                            cellspacing="0"
                            cellpadding="0"
                            style="background:#000000"
                            class="m_device_width"
                          >
                            <tr>
                              <td align="center">
                                <table
                                  align="center"
                                  width="100%"
                                  border="0"
                                  cellspacing="0"
                                  cellpadding="0"
                                >
                                  <tr>
                                    <th
                                      align="left"
                                      valign="middle"
                                      width="64.666666%"
                                      style="width: 64.666666%; background-repeat:no-repeat; background-position:top right"
                                      background="https://i.imgur.com/6IymB98.jpg"
                                    >
                                      <table
                                        align="center"
                                        width="100%"
                                        border="0"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tr>
                                          <td align="center" style="padding:40px 10px">
                                            <table
                                              align="center"
                                              width="100%"
                                              border="0"
                                              cellspacing="0"
                                              cellpadding="0"
                                            >
                                              <tr>
                                                <td
                                                  align="left"
                                                  width="18"
                                                  style="width:18px; padding:0px 0px 7px 0px"
                                                >
                                                  <img
                                                    align="left"
                                                    src="https://i.imgur.com/ZtalTud.png"
                                                    alt=""
                                                    width="18"
                                                    height="18"
                                                    style="width:18px; max-width:18px; display:block"
                                                    class="sm_icon"
                                                  />
                                                </td>
                                                <td
                                                  align="left"
                                                  style="padding:0px 0px 7px 5px;font-family: 'Roboto', Tahoma, Segoe, sans-serif; font-size:13.70px; font-weight:normal; line-height:14px; color:#ffffff; text-align:left;"
                                                  class="font11"
                                                >
                                                ${publicRuntimeConfig.PHONE}
                                                </td>
                                              </tr>
                                              <tr>
                                                <td
                                                  align="left"
                                                  width="18"
                                                  style="width:18px;"
                                                >
                                                  <img
                                                    align="left"
                                                    src="https://i.imgur.com/9T7w2Kv.png"
                                                    alt=""
                                                    width="18"
                                                    height="12"
                                                    style="width:18px; max-width:18px; display:block"
                                                    class="sm_icon"
                                                  />
                                                </td>
                                                <td
                                                  align="left"
                                                  style="padding:0px 0px 0px 5px;font-family: 'Roboto', Tahoma, Segoe, sans-serif; font-size:13.70px; font-weight:normal; line-height:14px; color:#ffffff; text-align:left;"
                                                  class="font11"
                                                >
                                                  <a
                                                    href="mailto:${publicRuntimeConfig.Admin_Email}"
                                                    style="color:#ffffff; text-decoration:none!important"
                                                    >${publicRuntimeConfig.Admin_Email}</a
                                                  >
                                                </td>
                                              </tr>
                                            </table>
                                          </td>
                                        </tr>
                                      </table>
                                    </th>
                                    <th
                                      align="left"
                                      valign="middle"
                                      bgcolor="#0b71b9"
                                      width="35.333333%"
                                      style="width: 35.333333%;"
                                    >
                                      <table
                                        align="center"
                                        width="100%"
                                        border="0"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tr>
                                          <td
                                            align="center"
                                            style="padding:0px 44px 0px 0px"
                                            class="mob_pr12"
                                          >
                                            <table
                                              align="right"
                                              border="0"
                                              cellspacing="0"
                                              cellpadding="0"
                                            >
                                              <tr>
                                                <td
                                                  align="center"
                                                  style="padding:0px 14px"
                                                  class="spacer"
                                                >
                                                  <a
                                                    href="https://www.instagram.com/smsami1258946"
                                                    target="_blank"
                                                  >
                                                    <img
                                                      align="center"
                                                      src="https://i.imgur.com/auxeind.png"
                                                      alt=""
                                                      width="31"
                                                      height="31"
                                                      style="width:31px; max-width:31px; display:block"
                                                      class="social_icon"
                                                    />
                                                  </a>
                                                </td>
                                                <td
                                                  align="center"
                                                  style="padding:0px 14px"
                                                  class="spacer"
                                                >
                                                  <a
                                                    href="https://twitter.com/s_sami125"
                                                    target="_blank"
                                                  >
                                                    <img
                                                      align="center"
                                                      src="https://i.imgur.com/QV0qmLC.png"
                                                      alt=""
                                                      width="30"
                                                      height="25"
                                                      style="width:30px; max-width:30px; display:block"
                                                      class="social_icon"
                                                    />
                                                  </a>
                                                </td>
                                                <td
                                                  align="center"
                                                  style="padding:0px 14px"
                                                  class="spacer"
                                                >
                                                  <a
                                                    href="https://www.facebook.com/m.sami125/"
                                                    target="_blank"
                                                  >
                                                    <img
                                                      align="center"
                                                      src="https://i.imgur.com/wPb7ijk.png"
                                                      alt=""
                                                      width="17"
                                                      height="31"
                                                      style="width:17px; max-width:17px; display:block"
                                                      class="social_icon"
                                                    />
                                                  </a>
                                                </td>
                                              </tr>
                                            </table>
                                          </td>
                                        </tr>
                                      </table>
                                    </th>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </body>
          </html>
          `,
            },
            (error) => {
              if (error) {
                console.log(error);
                res.statusCode = 201;
                res.setHeader("Content-Type", "application/json");
                res.end(
                  JSON.stringify({
                    status: "error",
                    data: {
                      error,
                    },
                  })
                );
              } else {
                res.statusCode = 201;
                res.setHeader("Content-Type", "application/json");
                res.end(
                  JSON.stringify({
                    status: "success",
                    data: {
                      message: "Message Sent Successfully",
                    },
                  })
                );
              }
            }
          );
        }
      }
    );
  }
};

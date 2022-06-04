import frontendRouter from "./frontend-router.mjs";
import axios from "axios";

/**
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
const handler = async (req, res) => {
  const { url, headers, body, method } = req;

  // get request prefix path
  const prefixPath = `/${url.split("/")[1]}`;

  /**
   *
   * @type {{ desc: string, server: string }}
   *
   */
  let serverPointing = frontendRouter[prefixPath];
  if (!serverPointing) {
    // TODO: fallback when no server poiting
    res.status(200).send("<html><body>Not Found</body></html>");
    return;
  }

  try {
    const hostUrl = `${serverPointing?.server}${url}`;
    const respAxios = await axios({
      method: method,
      headers: headers,
      url: hostUrl,
      data: body,
      validateStatus: (status) => {
        return status < 500;
      },
    });

    res.status(respAxios.status).send(respAxios.data);
  } catch (error) {
    // TODO: Error catch
  }
};

export default handler;

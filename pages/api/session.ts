// pages/api/session.ts
import { SessionData, sessionOptions } from "@/util/lib";
import { getIronSession } from "iron-session";
import { NextApiRequest, NextApiResponse } from "next";

export default async function CheckSession(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getIronSession<SessionData>(req, res, sessionOptions);

  if (!session.isLoggedIn) {
    res.status(200).json({ isLoggedIn: false });
  } else {
    res.status(200).json({
      isLoggedIn: true,
      fullname: session.fullname,
      email: session.email,
      isPro: session.isPro,
    });
  }
}

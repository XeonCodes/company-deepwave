// pages/api/login.ts
import { SessionData, sessionOptions } from "@/util/lib";
import { getIronSession } from "iron-session";

export default async function handler(req: any, res: any) {
  const { email, password } = req.body;

  const session = await getIronSession<SessionData>(req, res, sessionOptions);

  // Simulate user lookup
  let isPro = true;
  const storedEmail = "admin@xyz.com";
  const storedPassword = "123456";
  const fullname = "John Doe";

  if (email !== storedEmail || password !== storedPassword) {
    res.status(401).json({ error: "Invalid credentials" });
    return;
  }

  session.userID = "1";
  session.email = email;
  session.isPro = isPro;
  session.isLoggedIn = true;
  session.tutor = "Luciana A.";
  session.tutors = [];
  session.tutorImg = "lady.jpg";
  session.tutorTitle = "UI UX tutor";
  session.tutorEmail = "uiux@deepwave.com";
  session.fullname = fullname;
  await session.save();
  res.status(200).json({ message: "Login successful" });
}

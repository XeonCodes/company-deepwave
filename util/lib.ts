import { SessionOptions } from "iron-session";
import { env } from "process";

export interface SessionData {
  userID?: string;
  email?: string;
  tutor?: string;
  tutorImg?: string;
  tutorTitle?: string;
  tutorEmail?: string;
  fullname?: string;
  userImage?: string;
  isPro?: boolean;
  isLoggedIn: boolean;
  isBlocked?: boolean;
}

export const defaultSession: SessionData = {
  isLoggedIn: false,
};

export const sessionOptions: SessionOptions = {
  password: process.env.SECRETE_KEY!,
  cookieName: process.env.COOKIE_NAME!,
  cookieOptions: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 10,
  },
};

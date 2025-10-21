const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "admin1!";
const COOKIE_NAME = "clubhouse-admin-token";
const SESSION_VALUE = "clubhouse-admin-session";
const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "strict",
  path: "/",
  maxAge: 60 * 60 * 4,
};

export { ADMIN_USERNAME, ADMIN_PASSWORD, COOKIE_NAME, SESSION_VALUE, COOKIE_OPTIONS };

import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const isAuth = !!token;
    const isAdmin = token?.role === "ADMIN";
    const pathname = req.nextUrl.pathname;

    // Protect Admin routes
    if (pathname.startsWith("/admin") && !isAdmin) {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }

    // Redirect authenticated users away from auth pages
    if (isAuth && (pathname === "/login" || pathname === "/signup")) {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const pathname = req.nextUrl.pathname;
        // Public routes
        if (
          pathname === "/" ||
          pathname === "/login" ||
          pathname === "/signup" ||
          pathname === "/forgot-password" ||
          pathname === "/reset-password" ||
          pathname.startsWith("/study") ||
          pathname.startsWith("/official-manual") ||
          pathname.startsWith("/api/auth") ||
          pathname.startsWith("/_next") ||
          pathname.includes("favicon.ico")
        ) {
          return true;
        }
        return !!token;
      },
    },
  }
);

export const config = {
  matcher: [
    "/((?!api/auth|_next/static|_next/image|favicon.ico).*)",
  ],
};

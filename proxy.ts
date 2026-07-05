import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This help portal has no auth and no server-side gating, but we keep the
// same middleware convention as the main Kalendar app (proxy.ts exporting a
// `proxy` function) for consistency across KaminoLabs projects. It currently
// only passes requests through untouched.
export function proxy(_request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};

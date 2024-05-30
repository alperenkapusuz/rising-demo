import { NextResponse, NextRequest } from 'next/server';

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|icons|img|favicon.ico|/).*)'],
};

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get('token')?.value;

  if (token && pathname === '/') {
    return NextResponse.next();
  } else if (!token && pathname === '/giris/') {
    return NextResponse.next();
  } else if (token  && pathname === '/giris/') {
    return NextResponse.redirect(`${req.nextUrl.origin}/`);
  } else if(!token && pathname === '/') {
    return NextResponse.redirect(`${req.nextUrl.origin}/giris/`);
  }
}
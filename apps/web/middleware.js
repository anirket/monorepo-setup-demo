import { NextResponse } from 'next/server'

export function middleware(req) {
    if (req.nextUrl.href.includes('/social/_next')) {
      return NextResponse.rewrite(
        req.nextUrl.href.replace('/social/_next', '/_next'),
      )
    }
  
    return NextResponse.next()
}
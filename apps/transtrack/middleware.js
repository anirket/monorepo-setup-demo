import { NextResponse } from 'next/server'

export function middleware(req) {
    if (req.nextUrl.href.includes('/transtrack/_next')) {
      return NextResponse.rewrite(
        req.nextUrl.href.replace('/transtrack/_next', '/_next'),
      )
    }
  
    return NextResponse.next()
}
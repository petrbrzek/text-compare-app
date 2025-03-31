import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Get the request method and path
  const method = request.method
  const path = request.nextUrl.pathname
  const timestamp = new Date().toISOString()
  
  // Log the request details
  console.log(`[${timestamp}] ${method} ${path}`)
  
  // Continue with the request
  return NextResponse.next()
}

// Configure which paths the middleware will run on
export const config = {
  matcher: '/:path*',
} 
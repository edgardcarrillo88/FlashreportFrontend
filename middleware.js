// middleware.ts
import { NextResponse } from 'next/server'

// lo que hce esta ffunción es que pre procese todas las peticiones de rutas antes de ir a ellas
export function middleware(request) {
    console.log('la lora');
  return NextResponse.next()
}

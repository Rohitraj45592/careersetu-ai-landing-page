import { createClient } from '@/lib/supabase/server'
import { NextResponse, type NextRequest } from 'next/server'

/**
 * Logout endpoint. POST here from a form/button to end the session.
 * Example: <form action="/auth/signout" method="post"><button>Log out</button></form>
 */
export async function POST(request: NextRequest) {
  const supabase = await createClient()
  await supabase.auth.signOut()

  return NextResponse.redirect(new URL('/login', request.url), { status: 303 })
}

import { createClient } from "@supabase/supabase-js";

function getSupabaseCredentials() {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Supabase environment variables are not configured.");
  }

  return { supabaseAnonKey, supabaseUrl };
}

export function createServerClient() {
  const { supabaseAnonKey, supabaseUrl } = getSupabaseCredentials();

  return createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: false,
    },
  });
}

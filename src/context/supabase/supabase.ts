import { SupabaseClient, createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || "NO_URL_SUPABASE";
const supabaseKey = process.env.REACT_APP_SUPABASE_API_KEY || "NO_API_KEY_SUPABASE";
const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);

export default supabase;
export const auth = supabase.auth;

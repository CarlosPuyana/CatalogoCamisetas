import { SupabaseClient, createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://aavncjcqcpggapslxgpd.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFhdm5jamNxY3BnZ2Fwc2x4Z3BkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI0NzExNDQsImV4cCI6MjAwODA0NzE0NH0.c1rLKBz8VChMz4D5kmKC8GdybNmP_YAdE0xV-88N2Ew';
const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);

export default supabase;
export const auth = supabase.auth;

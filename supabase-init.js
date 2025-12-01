import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const SUPABASE_URL = "https://mexrppgcjoxjwpujxuih.supabase.co";
const SUPABASE_ANON = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1leHJwcGdjam94andwdWp4dWloIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ1Njg1ODMsImV4cCI6MjA4MDE0NDU4M30.gDUeHQAeJqZpIPsQ-Ad1GwxxBVL_tRJwdGe0tmOYsfI";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON);

import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://nniuhtkebuozusfommpu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5uaXVodGtlYnVvenVzZm9tbXB1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg3NjcxNzEsImV4cCI6MjAxNDM0MzE3MX0.9IodjAoY7pWAhzygvq7SxL6VZ-9jSMHdwVqcbiypMgU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

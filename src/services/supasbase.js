import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://esxrfddzwqvakyviingc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVzeHJmZGR6d3F2YWt5dmlpbmdjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIzODUxNTEsImV4cCI6MjAzNzk2MTE1MX0.EsvmghZ6_eB-xxpdOVCO4CCT9VVmTHfWulYAGr9wEEo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

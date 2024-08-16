
import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://dysayodpvtzawkbectlu.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5c2F5b2RwdnR6YXdrYmVjdGx1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgxOTAxNDUsImV4cCI6MjAzMzc2NjE0NX0.swEoKHxMp9nMP7QPNYZ090A2gssefhP8XlexlCvhECg'
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase;
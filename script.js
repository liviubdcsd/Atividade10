const supabase = supabase.createClient(
  'https://zgavnipukkdtwlcvenhh.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpnYXZuaXB1a2tkdHdsY3ZlbmhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg3MDQwMjcsImV4cCI6MjA2NDI4MDAyN30.ZyoR9jvppwtCXhmSKRqQ67_pz19s2TWnxwpkFC_WcuM'
);

async function signUp() {
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;
  const { data, error } = await supabase.auth.signUp({ email, password });
  alert(error ? error.message : 'Cadastro realizado!');
}

async function signIn() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  alert(error ? error.message : 'Login realizado!');
}

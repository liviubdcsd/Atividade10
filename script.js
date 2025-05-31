const supabase = supabase.createClient(
  'SUA_URL_DO_SUPABASE',
  'SUA_CHAVE_ANON'
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

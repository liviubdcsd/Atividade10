
const supabase = window.supabase.createClient(
  'https://zgavnipukkdtwlcvenhh.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpnYXZuaXB1a2tkdHdsY3ZlbmhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg3MDQwMjcsImV4cCI6MjA2NDI4MDAyN30.ZyoR9jvppwtCXhmSKRqQ67_pz19s2TWnxwpkFC_WcuM' // sua public anon key aqui
);

async function signUp() {
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;

  const { error: signUpError } = await supabase.auth.signUp({ email, password });

  if (signUpError) {
    alert('Erro ao cadastrar: ' + signUpError.message);
    return;
  }

  // Login automático após cadastro
  const { data: loginData, error: signInError } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (signInError) {
    alert('Erro ao fazer login: ' + signInError.message);
  } else {
    alert('Cadastro e login realizados com sucesso!');
    console.log('Usuário logado:', loginData);
    window.location.href = 'login.html';
  }
}

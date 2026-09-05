async function checkAuth() {
    const { data: { session }, error } = await supabaseClient.auth.getSession();
    
    if (!session) {
        window.location.href = 'login.html';
        return null;
    }
    return session;
}

async function logout() {
    await supabaseClient.auth.signOut();
    window.location.href = 'login.html';
}
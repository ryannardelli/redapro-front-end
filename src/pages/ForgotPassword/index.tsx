export function ForgotPassword() {
  return (
    <div
      className="forgot-password-container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f9fafb",
        fontFamily: "'Inter', system-ui, sans-serif",
      }}
    >
      <div
        className="card"
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "16px",
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          width: "100%",
          maxWidth: "400px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            background: "#eff6ff",
            width: "56px",
            height: "56px",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 24px",
          }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3-3.5 3.5z"></path>
          </svg>
        </div>

        <h1 style={{ fontSize: "24px", fontWeight: "700", color: "#111827", marginBottom: "8px" }}>
          Esqueceu sua senha?
        </h1>

        <p style={{ fontSize: "14px", color: "#6b7280", marginBottom: "32px", lineHeight: "1.5" }}>
          Informe seu e-mail e enviaremos um link para você redefinir sua senha com segurança.
        </p>

        <form onSubmit={(e) => e.preventDefault()}>
          <div style={{ textAlign: "left", marginBottom: "24px" }}>
            <label
              htmlFor="email"
              style={{ display: "block", fontSize: "14px", fontWeight: "500", color: "#374151", marginBottom: "6px" }}
            >
              E-mail
            </label>
            <input
              type="email"
              id="email"
              placeholder="seuemail@exemplo.com"
              required
              style={{
                width: "100%",
                padding: "12px 16px",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
                fontSize: "14px",
                boxSizing: "border-box",
                outline: "none",
                transition: "border-color 0.2s",
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              background: "#2563eb",
              color: "white",
              padding: "12px",
              border: "none",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "background 0.2s",
            }}
          >
            Enviar link de recuperação
          </button>
        </form>

        <div style={{ marginTop: "24px" }}>
          <a href="/login" style={{ fontSize: "14px", color: "#6b7280", textDecoration: "none", fontWeight: "500" }}>
            ← Voltar para o login
          </a>
        </div>
      </div>
    </div>
  );
}
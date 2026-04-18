import { useAuth } from "@hooks/useAuth";
import { useState } from "react";

export function ForgotPassword() {
  const { forgotPassword, state } = useAuth();

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setMessage(null);
    setError(null);

    try {
      await forgotPassword(email);

      setSuccess(true);
      setMessage(
        "Se o e-mail existir, você receberá um link para redefinir sua senha."
      );
    } catch (err: unknown) {
      const msg =
        err instanceof Error
          ? err.message
          : "Erro ao enviar link de recuperação";

      setError(msg);
    }
  };

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
          boxShadow:
            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          width: "100%",
          maxWidth: "400px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "24px",
            fontWeight: "700",
            color: "#111827",
            marginBottom: "8px",
          }}
        >
          Esqueceu sua senha?
        </h1>

        <p
          style={{
            fontSize: "14px",
            color: "#6b7280",
            marginBottom: "32px",
            lineHeight: "1.5",
          }}
        >
          Informe seu e-mail e enviaremos um link para redefinir sua senha.
        </p>

        {!success && (
          <form onSubmit={handleSubmit}>
            <div style={{ textAlign: "left", marginBottom: "16px" }}>
              <label
                htmlFor="email"
                style={{
                  display: "block",
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#374151",
                  marginBottom: "6px",
                }}
              >
                E-mail
              </label>

              <input
                type="email"
                id="email"
                placeholder="seuemail@exemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  border: "1px solid #d1d5db",
                  borderRadius: "8px",
                  fontSize: "14px",
                  boxSizing: "border-box",
                  outline: "none",
                }}
              />
            </div>

            {error && (
              <p style={{ color: "#ef4444", fontSize: "13px", marginBottom: "12px" }}>
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={state.loading}
              style={{
                width: "100%",
                background: state.loading ? "#93c5fd" : "#2563eb",
                color: "white",
                padding: "12px",
                border: "none",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: "600",
                cursor: state.loading ? "not-allowed" : "pointer",
              }}
            >
              {state.loading ? "Enviando..." : "Enviar link de recuperação"}
            </button>
          </form>
        )}

        {success && (
          <div
            style={{
              background: "#ecfdf5",
              color: "#065f46",
              padding: "16px",
              borderRadius: "8px",
              fontSize: "14px",
              lineHeight: "1.5",
            }}
          >
            {message}
          </div>
        )}

        <div style={{ marginTop: "24px" }}>
          <a
            href="/login"
            style={{
              fontSize: "14px",
              color: "#6b7280",
              textDecoration: "none",
              fontWeight: "500",
            }}
          >
            ← Voltar para o login
          </a>
        </div>
      </div>
    </div>
  );
}
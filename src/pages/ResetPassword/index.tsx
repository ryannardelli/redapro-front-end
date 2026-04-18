import { useAuth } from "@hooks/useAuth";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router";

export function ResetPassword() {
  const { resetPassword, state } = useAuth();

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const token = searchParams.get("token") || "";

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setError(null);

    if (!password || !confirmPassword) {
      setError("Preencha todos os campos");
      return;
    }

    if (password.length < 8) {
      setError("A senha deve ter pelo menos 8 caracteres");
      return;
    }

    if (password !== confirmPassword) {
      setError("As senhas não coincidem");
      return;
    }

    try {
      await resetPassword(token, password);

      setSuccess(true);

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err: unknown) {
      const msg =
        err instanceof Error ? err.message : "Erro ao redefinir senha";

      setError(msg);
    }
  };

  return (
    <div
      className="reset-password-container"
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
        <h1 style={{ fontSize: "24px", fontWeight: "700", color: "#111827" }}>
          Nova senha
        </h1>

        <p
          style={{
            fontSize: "14px",
            color: "#6b7280",
            marginBottom: "24px",
            lineHeight: "1.5",
          }}
        >
          Escolha uma senha forte para proteger sua conta.
        </p>

        {success ? (
          <div
            style={{
              background: "#ecfdf5",
              color: "#065f46",
              padding: "16px",
              borderRadius: "8px",
              fontSize: "14px",
            }}
          >
            Senha redefinida com sucesso! Redirecionando...
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div style={{ textAlign: "left", marginBottom: "16px" }}>
              <label style={{ fontSize: "14px", fontWeight: "500" }}>
                Nova senha
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #d1d5db",
                  borderRadius: "8px",
                  marginTop: "6px",
                }}
              />
            </div>

            <div style={{ textAlign: "left", marginBottom: "20px" }}>
              <label style={{ fontSize: "14px", fontWeight: "500" }}>
                Confirmar senha
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #d1d5db",
                  borderRadius: "8px",
                  marginTop: "6px",
                }}
              />
            </div>

            {error && (
              <p style={{ color: "#ef4444", fontSize: "13px" }}>{error}</p>
            )}

            <button
              type="submit"
              disabled={state.loading}
              style={{
                width: "100%",
                background: state.loading ? "#93c5fd" : "#10b981",
                color: "white",
                padding: "12px",
                border: "none",
                borderRadius: "8px",
                fontWeight: "600",
                cursor: state.loading ? "not-allowed" : "pointer",
              }}
            >
              {state.loading ? "Redefinindo..." : "Redefinir senha"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
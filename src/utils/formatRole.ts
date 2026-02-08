export function formatRole(role: string): string {
  switch (role) {
    case "student":
      return "Estudante";
    case "admin":
      return "Administrador";
    case "corrector":
      return "Corretor";
    default:
      return "Desconhecido";
  }
}

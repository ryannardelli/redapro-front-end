export type User = {
    id: number,
    name: string;
    email: string;
    role: "admin" | "student" | "corrector";
    pictureUrl: string;
    createdAt: string;
}
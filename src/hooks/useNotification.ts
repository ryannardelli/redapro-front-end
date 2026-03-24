import { socket } from "@services/socket";
import { useEffect, useState } from "react";
import { useProfileStudentEssay } from "./useProfileStudentEssay";
import type { Feedback } from "models/Essay";

export interface Notification {
  id: string;
  message: string;
  read: boolean;
  createdAt: string;
}

export function useNotifications(userId?: number) {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const { updateEssayRealtime } = useProfileStudentEssay();

  useEffect(() => {
    const stored = localStorage.getItem("notifications");
    if (stored) {
      setNotifications(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "notifications",
      JSON.stringify(notifications)
    );
  }, [notifications]);

  useEffect(() => {
    if (!userId) return;

    socket.connect();

    socket.emit("join", userId);

    socket.on("essay:status", (data: { id: number, status: string, note?: number, message: string, feedback: Feedback  }) => {
      updateEssayRealtime({
        id: data.id,
        status: data.status as "PENDENTE" | "CORRIGIDA" | "EM_CORRECAO" | "ERRO",
        note: data.note,
        feedback: data.feedback
          ? {
              c1: String(data.feedback.c1),
              c2: String(data.feedback.c2),
              c3: String(data.feedback.c3),
              c4: String(data.feedback.c4),
              c5: String(data.feedback.c5),
              general: data.feedback.general
            }
          : undefined
      });

      setNotifications(prev => [
        {
          id: crypto.randomUUID(),
          message: data.message,
          read: false,
          createdAt: new Date().toISOString()
        },
        ...prev
      ]);
    });

    return () => {
      socket.off("essay:status");
      socket.disconnect();
    };
  }, [userId]);

  const hasUnread = notifications.some(n => !n.read);

  const openPanel = () => {
    setIsOpen(prev => !prev);

    setNotifications(prev =>
      prev.map(n => ({ ...n, read: true }))
    );
  };

  const readAll = () => {
    setNotifications(prev =>
      prev.map(n => ({ ...n, read: true }))
    );
  };

  const clearAll = () => {
    setNotifications([]);
  };

  return {
    notifications,
    hasUnread,
    isOpen,
    openPanel,
    readAll,
    clearAll
  };
}
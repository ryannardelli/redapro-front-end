import { socket } from "@services/socket";
import { useEffect, useState } from "react";
import { useProfileStudentEssay } from "./useProfileStudentEssay";
import type { SocketEssayPayload } from "models/Essay";

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

    socket.on("essay:status", (data: SocketEssayPayload) => {

      updateEssayRealtime({
          id: data.id,
          status: data.status as "PENDENTE" | "CORRIGIDA" | "EM_CORRECAO" | "ERRO" | null,
          note: data.note,
          feedback: data.feedback,
          generalFeedback: data.generalFeedback
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
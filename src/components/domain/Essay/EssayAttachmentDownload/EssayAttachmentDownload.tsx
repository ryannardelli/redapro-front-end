import { Download } from "lucide-react";
import { getDownloadUrl } from "utils/getDownloadUrl";

type Props = {
  attachmentUrl?: string | null;
  filename?: string | null;
};

export function EssayAttachmentDownload({
  attachmentUrl,
  filename,
}: Props) {
  if (!attachmentUrl) return null;

  console.log(filename);

  const safeFilename = filename || "arquivo";

  const downloadUrl = getDownloadUrl(attachmentUrl, safeFilename);

  return (
    <a
      href={downloadUrl}
      download={safeFilename}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center px-3 py-2 text-xs font-semibold bg-indigo-50 text-indigo-600 rounded-lg border border-indigo-200 hover:bg-indigo-100 transition"
      title="Baixar arquivo"
    >
      <Download size={14} />
    </a>
  );
}
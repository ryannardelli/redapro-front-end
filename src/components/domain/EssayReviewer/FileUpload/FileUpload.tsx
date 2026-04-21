import { useRef } from "react";
import { FileText, UploadCloud, X } from "lucide-react";
import { showMessage } from "adapters/showMessage";

interface FileUploadProps {
  file: File | null;
  onFileChange: (file: File | null) => void;
}

export function FileUpload({ file, onFileChange }: FileUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (!selectedFile) return;

    const allowedExtensions = /(\.pdf|\.doc|\.docx)$/i;
    if (!allowedExtensions.exec(selectedFile.name)) {
      showMessage.error("Use apenas PDF ou Word.");
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }

    onFileChange(selectedFile);
    showMessage.success(`Arquivo "${selectedFile.name}" pronto!`);
  };

  const handleRemove = () => {
    onFileChange(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div className="flex items-center gap-4">
      {!file ? (
        <label className="flex items-center gap-2 px-3 py-1.5 bg-indigo-50 text-indigo-600 rounded-md cursor-pointer hover:bg-indigo-100 transition-colors text-sm font-medium border border-indigo-200">
          <UploadCloud size={16} />
          <span>Anexar arquivo</span>
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            accept=".pdf, .doc, .docx"
            onChange={handleFileChange}
          />
        </label>
      ) : (
        <div className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-md border border-emerald-200 text-sm animate-in fade-in slide-in-from-left-2">
          <FileText size={16} />
          <span className="max-w-[180px] truncate font-medium">{file.name}</span>
          <button
            onClick={handleRemove}
            className="ml-1 p-0.5 hover:bg-emerald-200 rounded-full transition-colors"
          >
            <X size={14} />
          </button>
        </div>
      )}
    </div>
  );
}
export function getDownloadUrl(url: string, filename: string) {
  if (!url) return "";
  
  const cleanFilename = filename.split('.')[0];
  const encoded = encodeURIComponent(cleanFilename);
  
  return url.replace("/upload/", `/upload/fl_attachment:${encoded}/`);
}

export const formatDate = (date: string | Date) => {
  if (!date) return "";

  const formattedDate = new Date(date);

  return formattedDate.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

export const getFileExtension = (url: string): string => {
  if (!url) return "";

  const cleanUrl = url.split("?")[0].split("#")[0];
  return cleanUrl.split(".").pop()?.toLowerCase() || "";
};

export const getFileType = (url: string) => {
  const ext = getFileExtension(url);

  if (["png", "jpg", "jpeg", "webp", "gif", "svg", "bmp", "avif"].includes(ext))
    return "image";

  if (ext === "pdf") return "pdf";

  if (["mp4", "mov", "avi", "webm", "mkv"].includes(ext))
    return "video";

  if (["doc", "docx"].includes(ext))
    return "word";

  if (["xls", "xlsx"].includes(ext))
    return "excel";

  if (["ppt", "pptx"].includes(ext))
    return "powerpoint";

  if (["txt"].includes(ext))
    return "text";

  return "unknown";
};

export const previewFile = (url: string) => {
  const type = getFileType(url);

  switch (type) {
    case "image":
    case "pdf":
    case "video":
      window.open(url, "_blank", "noopener,noreferrer");
      break;

    case "word":
    case "excel":
    case "powerpoint":
      // Office docs via Office Online
      window.open(
        `https://view.officeapps.live.com/op/view.aspx?src=${encodeURIComponent(
          url
        )}`,
        "_blank"
      );
      break;

    default:
      window.open(url, "_blank");
  }
};
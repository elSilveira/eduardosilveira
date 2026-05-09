import type React from 'react';

export const cvFileName = 'CV_Eduardo_Silveira_2026.pdf';
export const cvUrl = `${import.meta.env.BASE_URL}${cvFileName}`;

export const downloadCv = async (
  event: React.MouseEvent<HTMLAnchorElement>,
) => {
  event.preventDefault();

  const response = await window.fetch(cvUrl);
  if (!response.ok) {
    window.location.href = cvUrl;
    return;
  }

  const blob = await response.blob();
  const objectUrl = URL.createObjectURL(blob);
  const link = document.createElement('a');

  link.href = objectUrl;
  link.download = cvFileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(objectUrl);
};

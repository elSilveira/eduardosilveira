import { describe, expect, it, vi } from 'vitest';
import { cvFileName, cvUrl, downloadCv } from './cvDownload';

describe('downloadCv', () => {
  it('downloads the CV through a blob URL instead of navigating to the PDF', async () => {
    const preventDefault = vi.fn();
    const click = vi.spyOn(HTMLAnchorElement.prototype, 'click').mockImplementation(() => {});
    const createObjectURL = vi.spyOn(URL, 'createObjectURL').mockReturnValue('blob:cv-download');
    const revokeObjectURL = vi.spyOn(URL, 'revokeObjectURL').mockImplementation(() => {});
    const blob = new Blob(['cv'], { type: 'application/pdf' });
    const fetch = vi.spyOn(window, 'fetch').mockResolvedValue(new Response(blob, { status: 200 }));

    await downloadCv({ preventDefault } as unknown as React.MouseEvent<HTMLAnchorElement>);

    expect(preventDefault).toHaveBeenCalledOnce();
    expect(fetch).toHaveBeenCalledWith(cvUrl);
    expect(click).toHaveBeenCalledOnce();
    expect(document.querySelector(`a[download="${cvFileName}"]`)).toBeNull();
    expect(revokeObjectURL).toHaveBeenCalledWith('blob:cv-download');

    click.mockRestore();
    createObjectURL.mockRestore();
    revokeObjectURL.mockRestore();
    fetch.mockRestore();
  });
});

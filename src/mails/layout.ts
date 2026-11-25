export const layout = (heading: string, body: string, action: string, url: string) => `
<div style="font-family: system-ui, sans-serif; max-width: 480px; margin: 0 auto; padding: 24px; color: #1f2937;">
    <h1 style="font-size: 20px; margin: 0 0 12px;">${heading}</h1>
    <p style="font-size: 14px; line-height: 1.5; margin: 0 0 20px;">${body}</p>
    <a href="${url}" style="display: inline-block; background: #111827; color: #ffffff; padding: 10px 16px; border-radius: 8px; text-decoration: none; font-size: 14px;">${action}</a>
    <p style="font-size: 12px; color: #6b7280; margin: 20px 0 0;">If the button doesn't work, open this link: ${url}</p>
</div>`;

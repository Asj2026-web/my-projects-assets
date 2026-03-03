class UnifiedFooter extends HTMLElement {
    connectedCallback() {
        const projectName = document.title || "حاسبة التقاعد للمعلمين";
        const year = new Date().getFullYear();

        this.innerHTML = `
        <div style="background-color: #0f172a; color: #f8fafc; padding: 40px 20px; font-family: 'Tajawal', sans-serif; text-align: center; border-top: 4px solid #2563eb; direction: rtl; margin-top: 40px;">
            
            <h3 style="margin: 0 0 10px 0; color: #60a5fa; font-size: 1.5rem;">${projectName}</h3>
            <p style="margin: 5px 0; font-size: 1rem; opacity: 0.8;">&copy; ${year} جميع الحقوق محفوظة</p>

            <div style="margin: 25px 0; display: flex; justify-content: center; gap: 10px; flex-wrap: wrap;">
                <a href="https://tr-bwl.pages.dev/?v=1" target="_blank" style="background: #1e293b; color: #60a5fa; padding: 8px 20px; border-radius: 20px; text-decoration: none; font-size: 0.9rem; border: 1px solid #334155;">📊 المستشار المالي</a>
                <a href="https://linkedin.com" target="_blank" style="background: #1e293b; color: white; padding: 8px 20px; border-radius: 20px; text-decoration: none; font-size: 0.9rem; border: 1px solid #334155;">LinkedIn</a>
                <a href="https://github.com" target="_blank" style="background: #1e293b; color: white; padding: 8px 20px; border-radius: 20px; text-decoration: none; font-size: 0.9rem; border: 1px solid #334155;">GitHub</a>
            </div>

            <hr style="border: 0; border-top: 1px solid #334155; margin: 25px auto; width: 50%;">

            <p style="font-size: 0.9rem; color: #94a3b8; line-height: 1.6;">
                جميع الحقوق محفوظة لـ <br>
                <span style="color: #60a5fa; font-weight: bold;">mr.abdulrahmanaljaberi@gmail.com</span>
            </p>

            <div style="margin-top: 15px; opacity: 0.8;">
                <img src="https://profile-counter.glitch.me/mrabdulrahmanaljaberi-TR/count.svg" alt="Counter">
            </div>
        </div>
        `;
    }
}
customElements.define('my-footer', UnifiedFooter);
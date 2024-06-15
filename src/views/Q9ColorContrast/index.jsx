import React from "react";

import "./style.css";

function Q9ColorContrast() {
  return (
    <div className="color-contrast">
      <h1>کنتراست رنگی مناسب</h1>
      <p>
        با حفظ ماهیت رنگ‌ها کنتراست رنگی عناصر این صفحه را تا سطح AAA بهبود
        دهید.
      </p>
      <header className="conrtast-header">
        <h2>وبسایت نمونه</h2>
      </header>

      <section className="contrast-section">
        <h3>خانه</h3>
        <p>
          خوش آمدید به وبسایت نمونه ما! هدف ما ارائه بهترین خدمات به مشتریان
          عزیز است. لطفا بخش‌های مختلف وبسایت را مرور کنید.
        </p>
      </section>

      <section className="contrast-section">
        <h3>درباره ما</h3>
        <p>
          ما یک تیم حرفه‌ای و مجرب هستیم که به ارائه خدمات متنوع در زمینه طراحی
          و توسعه وب‌سایت‌ها می‌پردازیم.
        </p>
      </section>

      <footer className="contrast-footer">
        <p>تمام حقوق محفوظ است &copy; ۱۴۰۳</p>
      </footer>
    </div>
  );
}

export default Q9ColorContrast;

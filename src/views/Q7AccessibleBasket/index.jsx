import React from "react";
import basketImg from "../../assets/basket.png";

function Q7AccessibleBasket() {
  return (
    <div>
      <h1>سبد خرید دسترسی‌پذیری</h1>
      <p>
        یک سیستم سبد خرید مشابه شکل زیر درست کنید. توجه کنید که با افزودن هر
        آیتم به سبد خرید، تعداد آیتم‌های موجود در سبد خرید باید به صورت زنده
        برای کاربر صفحه‌خوان خوانده‌شود.
      </p>
      <p>
        <strong>x آیتم در سبد خرید موجود است.</strong>
      </p>
      <img
        src={basketImg}
        alt="دیزاین نمونه سیستم سبد خرید"
        width="100%"
        style={{ maxWidth: 400 }}
      />
    </div>
  );
}

export default Q7AccessibleBasket;

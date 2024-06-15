import React from "react";
import "./style.css";

function Q11DisableAnimation() {
  return (
    <div>
      <h1>غیرفعال کردن یا کندتر کردن انیمیشن</h1>
      <p>
        با استفاده از ویژگی prefers-reduce-motion، انیمیشن دکمه زیر را برای
        کاربرانی که آن‌ها را اذیت می‌کند، از لحاظ دسترسی‌پذیری بهبود دهید.
      </p>
      <button className="animated-button">دکمه انیمیشن‌دار :)</button>
    </div>
  );
}

export default Q11DisableAnimation;

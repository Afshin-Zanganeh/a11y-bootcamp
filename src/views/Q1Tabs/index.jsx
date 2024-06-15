import React from "react";
import tabImg from "../../assets/tabs.png";

function Q1Tabs() {
  return (
    <div>
      <h1>تب‌ دسترسی‌پذیر</h1>
      <p>
        با توجه به پترن‌های معرفی شده ARIA APG یک کامپوننت تب لیست و تب پنل
        دسترسی‌پذیر طراحی کنید.
      </p>
      <img src={tabImg} alt="نمونه طراحی لیست تب" width="100%" />
    </div>
  );
}

export default Q1Tabs;

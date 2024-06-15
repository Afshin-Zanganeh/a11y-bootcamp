import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

function Home() {
  return (
    <div className="questions-wrapper">
      <h1>سوالات بوت‌کمپ دسترسی‌پذیری</h1>
      <div className="question-item">
        <Link to="/q1-tab">سوال اول: تب دسترسی‌پذیر</Link>
      </div>
      <div className="question-item">
        <Link to="/q2-skip-to-main-content">
          سوال دوم: لینک پرش به محتوای اصلی
        </Link>
      </div>
      <div className="question-item">
        <Link to="/q3-page-title">سوال سوم: تایتل‌گذاری صفحات</Link>
      </div>
      <div className="question-item">
        <Link to="/q4-headings">سوال چهارم: هدینگ‌گذاری مناسب</Link>
      </div>
      <div className="question-item">
        <Link to="/q5-semantic-elements">سوال پنجم: تگ‌های معنایی</Link>
      </div>
      <div className="question-item">
        <Link to="/q6-enable-zoom">سوال ششم: فعالسازی زوم</Link>
      </div>
      <div className="question-item">
        <Link to="/q7-accessible-basket">سوال هفتم: سبد خرید دسترسی‌پذیر</Link>
      </div>
      <div className="question-item">
        <Link to="/q8-accessible-form">سوال هشتم: فرم دسترسی‌پذیر</Link>
      </div>
      <div className="question-item">
        <Link to="/q9-color-contrast">سوال نهم: کنتراست رنگی</Link>
      </div>
      <div className="question-item">
        <Link to="/q10-language">سوال دهم: مشخص‌کردن زبان مناسب</Link>
      </div>
      <div className="question-item">
        <Link to="/q11-disable-animation">
          سوال یازدهم: غیرفعال کردن انیمیشن
        </Link>
      </div>
    </div>
  );
}

export default Home;

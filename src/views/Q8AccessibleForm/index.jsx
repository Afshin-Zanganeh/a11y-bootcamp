import React from "react";

import "./style.css";

function Q8AccessibleForm() {
  return (
    <div>
      <h1>فرم دسترسی‌پذیر</h1>
      <p>فرم زیر را بدون تغییر اساسی در ساختار، دسترسی‌پذیر کنید.</p>

      <form action="#">
        <div className="form-item">
          <label id="username-label">نام کاربری:</label>
          <input type="text" id="username" name="username" />
        </div>

        <div className="form-item">
          <label id="email-label">ایمیل:</label>
          <input type="email" name="email" />
        </div>

        <div className="form-item">
          <label id="password-label">رمز عبور:</label>
          <div id="password-desc">رمز عبور باید شامل حداقل ۸ کاراکتر باشد.</div>
          <input
            type="password"
            id="password"
            name="password"
            aria-labelledby=""
            aria-describedby=""
          />
        </div>

        <div className="form-item">
          <div for="phone" id="phone-label">
            شماره تلفن:
          </div>
          <input type="tel" id="phone" name="phone" aria-labelledby="" />
        </div>

        <div className="form-item">
          <fieldset>
            <legend id="gender-legend">جنسیت:</legend>
            <input type="radio" id="male" name="gender" value="male" />
            <label id="male-label">مرد</label>
            <input type="radio" id="female" name="gender" value="female" />
            <label id="female-label">زن</label>
          </fieldset>
        </div>

        <div className="form-item">
          <label for="country" id="country-label">
            کشور:
          </label>
          <select name="country" aria-labelledby="">
            <option value="iran">ایران</option>
            <option value="usa">آمریکا</option>
            <option value="germany">آلمان</option>
          </select>
        </div>

        <div className="form-item">
          <label id="bio-label">درباره خودتان:</label>
          <textarea id="bio" name="bio" rows="4"></textarea>
        </div>

        <div className="form-item">
          <input className="form-submit" type="submit" value="ثبت نام" />
        </div>
      </form>
    </div>
  );
}

export default Q8AccessibleForm;

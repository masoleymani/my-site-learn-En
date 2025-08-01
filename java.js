   function register() { /*یعنی یک تابع فانکشن به نام ریجستر ساختم برای ثبت نامه تا اجرا بشه */
      const user = document.getElementById("username").value; /*این خط مقدار وارد شده در فیلد نام کاربری رو میگیره و توی مقدار یوزر ذخیره میکنه */
      const pass = document.getElementById("password").value; /*مثل بالاییه هست ولی مقدار فیلد رمز عبور رو میگیره و توی متغیر پس میزاره */

      if (!user || !pass) { /*این شرطه که میگه اگه یوزر خالی بود یا پس خالی باشه یعنی هیچ چیزی  کاربر وارد نکرده */
        document.getElementById("message").textContent = "لطفاً نام کاربری و رمز را وارد کنید."; /* این خط میاد داخل تگ پی id=message یک پیام می نویسه لطفا نام کاربری و رمز عبور را وارد کنید */
        return; /*ادامه پیدا نکنه چون چیزی وارد نشده ثبت نام هم نمیکنه*/
      }

      localStorage.setItem("username", user); /*یعنی مقدار user که کاربر وارد کرده رو با کلیک یوزر نیم ذخیره کن تو حافظه ی مرور گر*/
      localStorage.setItem("password", pass); /*رمز عبور هم همینجوری هست */
      document.getElementById("message").style.color = "green"; /*پیامی که نشون میده رو به رنگ سبز میکنه */
      document.getElementById("message").textContent = "ثبت‌ نام با موفقیت انجام شد. حالا می‌تونی وارد بشی."; /*داخل تگ پی id=message این متن رو میذارم که کاربر بفهمه درسته */
    }

    function login() {
      const user = document.getElementById("username").value; /*یعنی هرچی کاربر وارد کرده توی فرم رو دریافت میکنیم */
      const pass = document.getElementById("password").value;  /*یعنی هرچی کاربر وارد کرده توی فرم رو دریافت میکنیم */

      const storedUser = localStorage.getItem("username"); /*یعنی اطلاعاتی که قبلا ذخیره کردیم تو ی مرورگر در زمان ثبنت نام از حافظه میخوانیم */
      const storedPass = localStorage.getItem("password"); /*یعنی اطلاعاتی که قبلا ذخیره کردیم تو ی مرورگر در زمان ثبنت نام از حافظه میخوانیم */

      if (user === storedUser && pass === storedPass) { //اگه نام کاربری و رمز عبور وارد شده با اطلاعات ذخیره شده یکی باشن ورود موفقه
        window.location.href = "index.html"; //میره بعد از ورود به صفحه ی اصلی 
      } else { //اگه اطلاعات اشتباه باشه 
        document.getElementById("message").style.color = "red"; //اگه اشتباه باشه متن به رنگ قرمز نشون میده 
        document.getElementById("message").textContent = "نام کاربری یا رمز اشتباه است."; // این هم متن پیام خطا هست 
      }
    }
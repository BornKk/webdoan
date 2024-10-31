document.addEventListener('DOMContentLoaded', function () {
  // Xử lý sự kiện submit form đăng nhập
  const loginForm = document.getElementById('login-form');

  loginForm.addEventListener('submit', function (event) {
      event.preventDefault(); // Ngăn chặn việc submit form thực tế

      // Lấy giá trị tài khoản và mật khẩu (không kiểm tra vì đây là web tĩnh)
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      // Hiển thị thông báo đăng nhập thành công
      alert('Đăng nhập thành công! Xin chào, ' + username);

      // Chuyển hướng về trang index.html
      window.location.href = 'index.html';
  });
});

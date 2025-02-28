
function login(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === "meo" && password === "meo") {
    alert('Đăng nhập thành công!');
    window.location.href = "HOME.html";
  } else {
    alert('Sai tên đăng nhập hoặc mật khẩu!\nGợi ý: meo/meo');
  }
}

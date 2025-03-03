// 模拟用户数据
const users = [
    { username: 'admin', password: 'admin123' },
    { username: 'user', password: 'user123' }
];

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // 验证用户名和密码
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        // 登录成功，存储登录状态
        sessionStorage.setItem('isLoggedIn', 'true');
        // 跳转到计算器页面
        window.location.href = 'calculator.html';
    } else {
        // 显示错误信息
        errorMessage.style.display = 'block';
        errorMessage.textContent = '用户名或密码错误';
    }
}

// 检查登录状态
function checkAuth() {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';
    const currentPage = window.location.pathname.split('/').pop();

    if (!isLoggedIn && currentPage !== 'login.html') {
        // 未登录且不在登录页面，重定向到登录页
        window.location.href = 'login.html';
    } else if (isLoggedIn && currentPage === 'login.html') {
        // 已登录且在登录页面，重定向到计算器页面
        window.location.href = 'calculator.html';
    }
}

// 退出登录
function logout() {
    sessionStorage.removeItem('isLoggedIn');
    window.location.href = 'login.html';
}

// 页面加载时检查登录状态
window.addEventListener('load', checkAuth);
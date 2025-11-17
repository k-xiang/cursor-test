// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    console.log('页面加载完成！');
    
    // 获取按钮元素
    const button = document.querySelector('.button');
    
    // 为按钮添加点击事件
    if (button) {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            alert('欢迎！这是一个简单的交互示例。');
        });
    }
});

// customer_service.js
(function() {
    // 使用 document.currentScript 获取当前脚本标签
    var currentScript = document.currentScript;
    if (!currentScript) {
        console.error('Current script tag not found.');
        return;
    }

    var src = currentScript.getAttribute('src');
    var id = getParameterByName('id', src);

    if (!id) {
        console.error('No unique ID provided.');
        return;
    }

    // 创建客服图标按钮
    var button = document.createElement('button');
    button.className = 'chat-button';
    button.innerHTML = ''; // 不使用图标，样式中添加

    button.style.position = 'fixed';
    button.style.bottom = '30px';
    button.style.right = '30px';
    button.style.zIndex = '100';
    button.style.backgroundColor = '#28a745'; // 默认绿色背景
    button.style.color = '#fff'; // 白色文本
    button.style.border = 'none';
    button.style.borderRadius = '50%';
    button.style.width = '60px';
    button.style.height = '60px';
    button.style.fontSize = '24px';
    button.style.cursor = 'pointer';
    button.style.display = 'flex';
    button.style.justifyContent = 'center';
    button.style.alignItems = 'center';
    button.style.boxShadow = '0 2px 5px rgba(0,0,0,0.25)';
    button.style.backgroundImage = "url('data:image/png;base64,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')";
    button.style.backgroundSize = 'contain';
    button.style.backgroundRepeat = 'no-repeat';
    button.style.backgroundPosition = 'center';

    let iframe = null; // 用于保存iframe的引用
    let loadingElement = null; // 用于保存loading元素的引用

    // 创建加载提示元素
    loadingElement = document.createElement('div');
    loadingElement.className = 'loading';
    loadingElement.style.position = 'fixed';
    loadingElement.style.bottom = '105px'; // 位于按钮上方
    loadingElement.style.right = '30px';
    loadingElement.style.zIndex = '101';
    loadingElement.style.backgroundColor = '#fff'; // 白色背景
    loadingElement.style.color = '#000'; // 黑色文字
    loadingElement.style.padding = '5px 10px';
    loadingElement.style.borderRadius = '5px';
    loadingElement.style.display = 'none'; // 默认隐藏
    loadingElement.textContent = 'Loading...';

    // 添加点击事件监听器
    button.addEventListener('click', function() {
        if (iframe) {
            // 如果iframe存在，则移除它
            document.body.removeChild(iframe);
            document.body.style.overflow = ''; // 恢复滚动
            button.style.backgroundColor = '#28a745'; // 还原默认颜色
            iframe = null;
            loadingElement.style.display = 'none'; // 隐藏loading
        } else {
            // 显示加载提示
            loadingElement.style.display = 'block';

            // 创建一个iframe并设置其属性
            iframe = document.createElement('iframe');
            iframe.style.position = 'fixed';
            iframe.style.zIndex = '999';
            iframe.style.bottom = '120px';
            iframe.style.right = '10px';
            iframe.style.width = '80%';
            iframe.style.maxWidth = '560px';
            iframe.style.height = '75vh';
            iframe.style.border = 'none';
            iframe.style.boxShadow = '0px 0px 12px rgba(0, 0, 0, .12)';
            iframe.style.borderRadius = '2px';

            // 设置iframe的src为外部链接
            iframe.src = 'http://alinesno-infra-smart-im-ui.beta.smart.infra.linesno.com/agentChat?roleId=' + id;

            // 当iframe加载完成后执行回调函数
            var postMessageToIframe = function() {
                // 发送消息到iframe
                iframe.contentWindow.postMessage({ action: 'init' }, '*');
            };

            // 监听iframe的消息
            window.addEventListener('message', function(event) {
                if (event.data.action === 'close') {
                    document.body.removeChild(iframe);
                    document.body.style.overflow = ''; // 恢复滚动
                    button.style.backgroundColor = '#28a745'; // 还原默认颜色
                    iframe = null;
                    loadingElement.style.display = 'none'; // 隐藏loading
                }
            }, false);

            document.body.appendChild(iframe);

            // iframe加载完成时发送消息并隐藏loading
            iframe.onload = function() {
                postMessageToIframe();
                loadingElement.style.display = 'none'; // 隐藏loading
            };

            // 防止滚动条冲突
            document.body.style.overflow = 'hidden';

            // 改变按钮颜色以作标识
            button.style.backgroundColor = '#d63031'; // 改为红色
        }
    });

    document.body.appendChild(button);
    document.body.appendChild(loadingElement);
})();

// 获取URL参数
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

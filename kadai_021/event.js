document.addEventListener('DOMContentLoaded', () => {
    // HTML要素を取得し、定数に代入
    const button = document.getElementById('myButton');
    const textElement = document.getElementById('myText');

    // ボタンにクリックイベントを追加
    button.addEventListener('click', () => {
        // 2秒後に文字を変更する非同期処理
        setTimeout(() => {
            textElement.textContent = '文字が変更されました';
        }, 2000);
    });
});
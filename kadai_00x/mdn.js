// 現在の年月日を取得して表示する関数
function displayCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1; // 月は0から始まるため+1
    const day = today.getDate();
    console.log(`今日の日付: ${year}年${month}月${day}日`);
}

// ページが読み込まれたときに関数を実行
window.onload = displayCurrentDate;
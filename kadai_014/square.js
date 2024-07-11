// アロー関数で二乗を計算する関数
const squareArrow = (num) => {
    console.log(num * num);
};

// functionで二乗を計算する関数
function squareFunction(num) {
    console.log(num * num);
}

// 関数のテスト
squareArrow(5); // 25が出力される
squareFunction(10); // 100が出力される
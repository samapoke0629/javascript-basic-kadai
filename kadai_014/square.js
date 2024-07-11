// アロー関数で二乗を計算する関数
const squareArrow = (num) => {
    return num * num; // 計算結果を戻り値として返す
};

// functionで二乗を計算する関数
function squareFunction(num) {
    return num * num; // 計算結果を戻り値として返す
}

// 関数のテスト
console.log(squareArrow(5)); // 25が出力される
console.log(squareFunction(10)); // 100が出力される
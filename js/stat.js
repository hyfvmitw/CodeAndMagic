/* ---- Переменные для облака ----*/

let CLOUD_WIDTH = 420;  // Ширина облака
let CLOUD_HEIGHT = 300; // Высота облака
let CLOUD_X = 150; // Координата X облака
let CLOUD_Y = 10; // Координата Y облака
let GAP = 10;  // смещение тени облака

/* ---- Переменные для текста ----*/
let MESSAGE_WIN_X = 110
let MESSAGE_WIN_Y = 20
let MESSAGE_WIN_GAP = 20
let FONT_COLOR = '#000'
let FONT_FAMILY = '16px Arial'
let FONT_GAP = 15
let TEXT_WIDTH = 50

/* ---- Переменные для гистаграммы ----*/
let BAR_WIDTH = CLOUD_WIDTH - GAP * 2 - TEXT_WIDTH // Расчет длины полоски гистаграммы
let BAR_HEIGHT = 20 // ширина полоски гистаграммы
let BAR_Y = 100 // Координата полоски гистаграммы по Y
let BAR_GAP = 50 // Расстояние между полосками гистаграммы



let renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
}

let getMaxElement = function (arr) {
    let maxElement = arr[0]
    for (let i = 0; i < arr.length; i++)
        if (arr[i] > maxElement) {
            maxElement = arr[i]
        }
    return maxElement
}

let getMinElement = function (arr) {
    let minElement = arr[0]
    for (let i = 0; i < arr.length; i++)
        if (arr[i] < minElement) {
            minElement = arr[i]
        }
    return minElement
}



window.renderStatistics = function (ctx, players, times) {
    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.3)')
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff')
    ctx.textBaseline = 'top'
    ctx.fillStyle = FONT_COLOR
    ctx.font = FONT_FAMILY

    let minTime = Math.round(getMinElement(times))
    console.log('minTime = ' + minTime);   

    ctx.fillText("Ура, вы победили!", CLOUD_X + GAP, MESSAGE_WIN_Y);
    ctx.fillText("Список результатов:", CLOUD_X + GAP, MESSAGE_WIN_Y + MESSAGE_WIN_GAP);
    
    let maxTime = Math.round(getMaxElement(times))
    console.log('maxTime = ' + maxTime);   

    for (let i = 0; i < players.length; i++) {
        ctx.fillText(players[i], CLOUD_X + GAP, BAR_Y + BAR_GAP * i)
        ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH, BAR_Y + BAR_GAP * i, (BAR_WIDTH * times[i]) / maxTime, BAR_HEIGHT)
    }

}
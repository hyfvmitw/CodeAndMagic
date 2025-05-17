/* ---- Переменные для облака ----*/

let CLOUD_WIDTH = 420;  // Ширина облака
let CLOUD_HEIGHT = 300; // Высота облака
let CLOUD_X = 180; // Координата X облака
let CLOUD_Y = 10; // Координата Y облака
let GAP = 10;  // смещение тени облака

/* ---- Переменные для текста ----*/
let MESSAGE_WIN_X = 110
let MESSAGE_WIN_Y = 50
let MESSAGE_WIN_GAP = 20
let FONT_COLOR = '#000'
let FONT_FAMILY = '16px Arial'
let FONT_GAP = 15
let TEXT_WIDTH = 50

/* ---- Переменные для гистаграммы ----*/
let GISTAGRAMM_WIDTH = 150
let GISTAGRAMM_HEIGHT = 20
let GISTAGRAMM_Y = 100
let GISTAGRAMM_GAP = 50



let renderCloud = function(ctx, x, y, color){
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
}

window.renderStatistics = function (ctx) {
    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.3)')
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff')
     ctx.textBaseline = 'top'
    ctx.fillStyle = FONT_COLOR
    ctx.font = FONT_FAMILY
    ctx.fillText("Ура, вы победили!", CLOUD_X + GAP, MESSAGE_WIN_Y);
    ctx.fillText("Список результатов:", CLOUD_X + GAP, MESSAGE_WIN_Y + MESSAGE_WIN_GAP);
    
    ctx.fillText('Вы', CLOUD_X + GAP, GISTAGRAMM_Y)
    ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH, GISTAGRAMM_Y, GISTAGRAMM_WIDTH, GISTAGRAMM_HEIGHT)
    
    ctx.fillText('Кекс', CLOUD_X + GAP, GISTAGRAMM_Y + GISTAGRAMM_GAP)
    ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH, GISTAGRAMM_Y + GISTAGRAMM_GAP, GISTAGRAMM_WIDTH, GISTAGRAMM_HEIGHT)
   
    ctx.fillText('Катя', CLOUD_X + GAP, GISTAGRAMM_Y + GISTAGRAMM_GAP * 2)
    ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH, GISTAGRAMM_Y + GISTAGRAMM_GAP * 2, GISTAGRAMM_WIDTH, GISTAGRAMM_HEIGHT)
    
    ctx.fillText('Игорь', CLOUD_X + GAP, GISTAGRAMM_Y + GISTAGRAMM_GAP * 3)
    ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH, GISTAGRAMM_Y + GISTAGRAMM_GAP * 3, GISTAGRAMM_WIDTH, GISTAGRAMM_HEIGHT)

    
}
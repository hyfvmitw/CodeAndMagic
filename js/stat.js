window.renderStatistics = function (ctx) {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillRect(110, 20, 420, 270);
    ctx.fillStyle = "#fff";
    ctx.fillRect(100, 10, 420, 270);

    ctx.font = "PT Mono bold 16px serif";
    ctx.strokeText("Ура вы победили!", 120, 50);
    ctx.strokeText("Список результатов:", 120, 70);

}

var drawing = false
var last_x = null
var last_y = null
var canvas = document.getElementById('stage')
var ctx = canvas.getContext('2d')

function cls(){
ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.font = '30px serif'
	ctx.fillText('★PWAサンプルアプリ★', 18, 40)
}
function resize() {
                canvas.setAttribute('width', window.innerWidth)
                canvas.setAttribute('height',400)
	ctx.font = '30px serif'
	ctx.fillText('☆PWAサンプルアプリ☆', 20, 40)
	ctx.font = '25px serif'
	ctx.fillText('マウスやタッチで絵を描きましょう！', 15, 80)
　　　　　ctx.lineWidth = 5

}

resize()
window.addEventListener('resize', resize)
window.addEventListener('orientationchange', resize)
canvas.addEventListener('mousedown', drawStart, false)
canvas.addEventListener('touchstart', drawStart, false)
function drawStart(event) {
	event.preventDefault()
	drawing = true
	last_x = event.pageX
	last_y = event.pageY
}

canvas.addEventListener('mousemove', drawLine, false)
canvas.addEventListener('touchmove', drawLine, false)
function drawLine(event) {
	if(!drawing) return
	if(event.type==='touchmove') event = event.changedTouches[0]
	ctx.strokeStyle =
		'rgb('+
		(Math.floor(Math.random()*255)) + ',' +
		(Math.floor(Math.random()*255)) + ',' +
		(Math.floor(Math.random()*255)) + ')'
	;
	ctx.beginPath()
	ctx.moveTo(last_x, last_y)
	ctx.lineTo(event.pageX, event.pageY)
	ctx.stroke()
	ctx.closePath()
	last_x = event.pageX
	last_y = event.pageY
}

canvas.addEventListener('mouseup', drawFinish, false)
canvas.addEventListener('touchend', drawFinish, false)
function drawFinish() {
	drawing = false
}

 

 

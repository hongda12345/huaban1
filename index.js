/*
* @Author: 宏达
* @Date:   2017-10-10 12:00:02
* @Last Modified by:   宏达
* @Last Modified time: 2017-10-11 19:30:48
*/
window.onload=function(){
	let canvas=document.querySelector('canvas');
	let line=document.querySelector('#line');
	let circle=document.querySelector('#circle');
	let poly=document.querySelector('#poly');
	let polj=document.querySelector('#polj');
	let square=document.querySelector('#square');
	let dash=document.querySelector('#dash');
	let pencil=document.querySelector('#pencil');
	let font=document.querySelector('#font');
	let stroke=document.querySelector('#stroke');
	let fill=document.querySelector('#fill');
	let colorone=document.querySelector('#colorone>input');
	let colortwo=document.querySelector('#colortwo>input');
	let eraser=document.querySelector('#eraser');
	let mask=document.querySelector('.mask');
	let xpc=document.querySelector('.xpc');
	let clip=document.querySelector('#clip');
	let clipobj=document.querySelector('.clipobj');
	let clips=document.querySelector('#clips');
	let clear=document.querySelector('#clear');
	let ctx=canvas.getContext("2d");
	let rightbottom=document.querySelector('.right-bottom');
	let canvw=parseInt(getComputedStyle(rightbottom,null).width);
	let canvh=parseInt(getComputedStyle(rightbottom,null).height);
	canvas.width=canvw;
	canvas.height=canvh;
	let pale=new Palette(canvas,ctx,mask);
	line.onclick=function(){
		pale.line();
	}
	circle.onclick=function(){
		pale.circle();
	}
	poly.onclick=function(){
		let num=prompt('请输入边数',5);
		pale.poly(num);
	}
	polj.onclick=function(){
		let num=prompt('请输入角数',5);
		pale.polj(num);
	}
	square.onclick=function(){
		pale.square();
	}
	dash.onclick=function(){
		pale.dash();
	}
	pencil.onclick=function(){
		pale.pencil();
	}
	font.onclick=function(){
		pale.font();
	}
	stroke.onclick=function(){
		pale.style='stroke';
	}
	colorone.onclick=function(){
		colorone.onblur=function(){
			pale.strokeStyle=colorone.value;
		}
	}
	fill.onclick=function(){
		pale.style='fill';
	}
	colortwo.onclick=function(){
		colortwo.onblur=function(){
			pale.fillStyle=colortwo.value;
		}
	}
	eraser.onclick=function(){
		let width=prompt('请输入橡皮尺寸',50);
		pale.xpc(xpc,width,width);
	}
	clips.onclick=function(){
		pale.clips();
	}
	clear.onclick=function(){
		pale.clear();
	}
	clip.onclick=function(){
		pale.clip(clipobj);
	}

}
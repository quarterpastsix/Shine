"use strict";

export class Game{

    constructor(){

        this.gameDiv = document.getElementById("Game");

        this.socket = null;

        let startbutton = document.createElement("Button");
        startbutton.innerText = "Connect and Start";
        startbutton.addEventListener("click",()=>{
            this.socket = new WebSocket("ws://qpserving.ddns.net:8765");
            this.socket.onopen = ()=>{
                this.gameDiv.remove(startbutton);
                this.socket.send("hi")
            };
            this.socket.onerror = (error) =>{
                console.log("not connected");
                console.log(error);
                startbutton.disabled = true;
            };
            this.socket.onclose = (event)=>{
                console.log("close");
                console.log(event)
            };
            this.socket.onmessage = (event) =>{
                // console.log(event);
                console.log(event.data);
            };
        });


        let canv = document.createElement("canvas");
        canv.width = window.innerWidth;
        canv.height = window.innerheight;

        this.gameDiv.appendChild(startbutton);
        this.gameDiv.appendChild(canv);

        this.ctx = canv.getContext("2d");

    }

    start(){
        console.log("hi")
    }

}
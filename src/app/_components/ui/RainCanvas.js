import React, { useEffect, useRef } from "react";

export function RainCanvas() {
  // CANVAS STYLING ///////
  const canvasStyle = {
    position: "fixed",
    zIndex: -3,
    width: "100vw",
    height: "100vh",
  };

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight + 70;

    let gradient = ctx.createLinearGradient(
      canvas.width / 10,
      0,
      canvas.width,
      0
    );
    gradient.addColorStop(0, "cyan");
    gradient.addColorStop(0.5, "blue");
    gradient.addColorStop(1, "cyan");

    class Symbol {
      constructor(x, y, fontSize, canvasHeight) {
        // 'BETA' CHARACTERS:
        this.characters = "|O";
        // 'THE MATRIX' CHARACTERS:
        // this.characters = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        this.x = x;
        this.y = y;
        this.fontSize = fontSize;
        this.text = "";
        this.canvasHeight = canvasHeight;
      }

      // Note: the 'draw' method below is custom and can be named anything you want.
      // Extra Note: the 'charAt()' method is a built-in JavaScript string method. It can be called on string data type. It takes a single 'index' argument and returns a new string containing only that one character located at that specific offset of the string.
      draw(context) {
        this.text = this.characters.charAt(
          Math.floor(Math.random() * this.characters.length)
        );
        context.fillText(
          this.text,
          this.x * this.fontSize,
          this.y * this.fontSize
        );
        if (
          this.y * this.fontSize > this.canvasHeight &&
          Math.random() > 0.97
        ) {
          this.y = 0;
        } else {
          this.y += 1;
        }
      }
    }

    class Effect {
      constructor(canvasWidth, canvasHeight) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.fontSize = 15;
        this.columns = this.canvasWidth / this.fontSize;
        this.symbols = [];
        this.#initialize();
      }
      #initialize() {
        for (let i = 0; i < this.columns; i++) {
          this.symbols[i] = new Symbol(i, 0, this.fontSize, this.canvasHeight);
        }
      }
      resize(width, height) {
        this.canvasWidth = width;
        this.canvasHeight = height;
        this.columns = this.canvasWidth / this.fontSize;
        this.#initialize();
      }
    }

    const effect = new Effect(canvas.width, canvas.height);

    let lastTime = 0;
    const fps = 15;
    const nextFrame = 1000 / fps;
    let timer = 0;

    function animate(timeStamp) {
      const deltaTime = timeStamp - lastTime;
      lastTime = timeStamp;
      if (timer > nextFrame) {
        ctx.fillStyle = "rgba(0,0,0,0.04)";
        ctx.textAlign = "center";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = gradient; // "green";
        ctx.font = effect.fontSize + "px monospace";
        effect.symbols.forEach((symbol) => symbol.draw(ctx));
        timer = 0;
      } else {
        timer += deltaTime;
      }
      requestAnimationFrame(animate);
    }
    animate(0);

    // window.addEventListener("resize", function () {
    //   canvas.width = window.innerWidth;
    //   // canvas.height = window.innerHeight;
    //   if (this.window.innerWidth > 500) {
    //     effect.resize(canvas.width); // removed... , canvas.height
    //     gradient = ctx.createLinearGradient(
    //       canvas.width / 10,
    //       0,
    //       canvas.width,
    //       0
    //     );
    //     gradient.addColorStop(0, "cyan");
    //     gradient.addColorStop(0.5, "blue");
    //     gradient.addColorStop(1, "cyan");
    //   }
    // });
  }, []);

  return <canvas style={canvasStyle} ref={canvasRef}></canvas>;
}

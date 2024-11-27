import React, { useEffect, useRef } from 'react';

const Stars: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    class Star {
      private x: number;
      private y: number;
      private radius: number;
      private alpha: number;
      private twinkleSpeed: number;
      private startTime: number;

      constructor(canvasWidth: number, canvasHeight: number) {
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.radius = Math.random() * 2;
        this.alpha = Math.random();
        this.twinkleSpeed = 0.001 + Math.random() * 0.001;
        this.startTime = Date.now();
      }

      draw(context: CanvasRenderingContext2D): void {
        const currentTime = Date.now();
        this.alpha = Math.abs(Math.sin((currentTime - this.startTime) * this.twinkleSpeed));
        
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
        context.fill();
      }
    }

    let stars: Star[] = [];
    let animationFrameId: number;

    // Function to create stars
    const createStars = () => {
      stars = Array.from({ length: 200 }, () => new Star(canvas.width, canvas.height));
    };

    // Set canvas size and create stars
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createStars(); // Recreate stars whenever canvas is resized
    };

    // Animation loop
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach(star => star.draw(ctx));
      animationFrameId = requestAnimationFrame(animate);
    };

    // Initial setup
    resizeCanvas();
    animate();

    // Add resize listener
    window.addEventListener('resize', resizeCanvas);

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
    />
  );
};

export default Stars;
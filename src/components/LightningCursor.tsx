
import React, { useEffect, useRef } from 'react';

export const LightningCursor: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let mouseX = 0;
    let mouseY = 0;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let cursorVisible = true;
    let trailPoints: {x: number, y: number}[] = [];
    
    // Set canvas to fullscreen
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);
    
    // Track mouse position
    const onMouseMove = (e: MouseEvent) => {
      prevMouseX = mouseX;
      prevMouseY = mouseY;
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorVisible = true;
      
      // Add current point to trail
      trailPoints.push({x: mouseX, y: mouseY});
      
      // Limit trail length
      if (trailPoints.length > 20) {
        trailPoints.shift();
      }
    };
    
    // Hide cursor when mouse leaves window
    const onMouseLeave = () => {
      cursorVisible = false;
      trailPoints = [];
    };
    
    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    
    // Draw lightning bolt effect
    const drawLightning = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      if (!cursorVisible || trailPoints.length < 2) return;
      
      // Main cursor circle
      ctx.beginPath();
      ctx.arc(mouseX, mouseY, 8, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(100, 255, 218, 0.8)';
      ctx.fill();
      
      // Outer glow
      ctx.beginPath();
      ctx.arc(mouseX, mouseY, 16, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(100, 255, 218, 0.3)';
      ctx.fill();
      
      // Draw lightning trail with fading effect
      for (let i = 0; i < trailPoints.length - 1; i++) {
        const point = trailPoints[i];
        const nextPoint = trailPoints[i + 1];
        
        // Calculate opacity based on position in trail
        const opacity = (i / trailPoints.length) * 0.8;
        
        // Create jagged lightning effect
        ctx.beginPath();
        
        // Starting point
        ctx.moveTo(point.x, point.y);
        
        // Add randomness to mid-points for lightning effect
        const midX = (point.x + nextPoint.x) / 2;
        const midY = (point.y + nextPoint.y) / 2;
        const jitterAmount = 10 * (1 - i / trailPoints.length);
        const jitterX = midX + (Math.random() - 0.5) * jitterAmount;
        const jitterY = midY + (Math.random() - 0.5) * jitterAmount;
        
        // Draw the jagged line
        ctx.lineTo(jitterX, jitterY);
        ctx.lineTo(nextPoint.x, nextPoint.y);
        
        // Style
        ctx.strokeStyle = `rgba(100, 255, 218, ${opacity})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      }
    };
    
    // Animation loop
    const animate = () => {
      drawLightning();
      requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-50"
      style={{ opacity: 0.9 }}
    />
  );
};


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
    };
    
    // Hide cursor when mouse leaves window
    const onMouseLeave = () => {
      cursorVisible = false;
    };
    
    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    
    // Draw lightning bolt effect
    const drawLightning = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      if (!cursorVisible) return;
      
      // Main cursor circle
      ctx.beginPath();
      ctx.arc(mouseX, mouseY, 10, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(64, 195, 247, 0.8)';
      ctx.fill();
      
      // Outer glow
      ctx.beginPath();
      ctx.arc(mouseX, mouseY, 20, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(64, 195, 247, 0.2)';
      ctx.fill();
      
      // Lightning trail
      if (prevMouseX && prevMouseY) {
        // Calculate distance for lightning detail
        const distance = Math.sqrt(Math.pow(mouseX - prevMouseX, 2) + Math.pow(mouseY - prevMouseY, 2));
        
        if (distance > 5) {
          ctx.beginPath();
          ctx.moveTo(mouseX, mouseY);
          
          // Create jagged lightning effect
          const segments = Math.floor(distance / 10);
          let lastX = mouseX;
          let lastY = mouseY;
          
          for (let i = 0; i < segments; i++) {
            const ratio = i / segments;
            const posX = prevMouseX + (mouseX - prevMouseX) * ratio;
            const posY = prevMouseY + (mouseY - prevMouseY) * ratio;
            
            // Add randomness for lightning effect
            const jitter = 15 * Math.sin(i);
            const angle = Math.atan2(mouseY - prevMouseY, mouseX - prevMouseX) + Math.PI/2;
            const offsetX = Math.cos(angle) * jitter;
            const offsetY = Math.sin(angle) * jitter;
            
            ctx.lineTo(posX + offsetX, posY + offsetY);
            lastX = posX;
            lastY = posY;
          }
          
          ctx.lineTo(prevMouseX, prevMouseY);
          ctx.strokeStyle = 'rgba(64, 195, 247, 0.7)';
          ctx.lineWidth = 2;
          ctx.stroke();
        }
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
      style={{ opacity: 0.8 }}
    />
  );
};

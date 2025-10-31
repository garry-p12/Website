import { useEffect, useRef } from 'react';

const CodeBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Code snippets with syntax highlighting colors
    const codeSnippets = [
      { text: 'function hello() {', color: '#60a5fa', type: 'function' },
      { text: 'const x = 42;', color: '#34d399', type: 'variable' },
      { text: 'class Developer {', color: '#fbbf24', type: 'class' },
      { text: 'import React', color: '#f472b6', type: 'import' },
      { text: 'def train_model():', color: '#60a5fa', type: 'function' },
      { text: 'async function fetch()', color: '#34d399', type: 'async' },
      { text: 'docker run -it app', color: '#0ea5e9', type: 'command' },
      { text: 'npm install', color: '#a78bfa', type: 'command' },
      { text: 'git commit -m', color: '#fb7185', type: 'command' },
      { text: 'const [state, setState]', color: '#60a5fa', type: 'hook' },
      { text: 'SELECT * FROM users', color: '#34d399', type: 'query' },
      { text: 'def __init__(self):', color: '#60a5fa', type: 'method' },
      { text: 'interface Props', color: '#f472b6', type: 'interface' },
      { text: 'return <div>', color: '#60a5fa', type: 'jsx' },
      { text: 'const map = new Map()', color: '#34d399', type: 'variable' },
      { text: 'useEffect(() => {}, [])', color: '#fbbf24', type: 'hook' },
      { text: 'router.get("/api")', color: '#0ea5e9', type: 'route' },
      { text: 'db.query("SELECT")', color: '#34d399', type: 'query' },
      { text: 'try { ... } catch', color: '#fb7185', type: 'error' },
      { text: 'export default', color: '#a78bfa', type: 'export' },
      { text: 'from sklearn import', color: '#60a5fa', type: 'import' },
      { text: 'tf.keras.Sequential()', color: '#34d399', type: 'class' },
      { text: 'axios.get(url)', color: '#0ea5e9', type: 'api' },
      { text: 'localStorage.setItem', color: '#a78bfa', type: 'api' },
      { text: 'console.log(data)', color: '#94a3b8', type: 'log' },
    ];

    // Character class for code characters
    class CodeChar {
      x: number;
      y: number;
      code: { text: string; color: string; type: string };
      speed: number;
      fontSize: number;
      opacity: number;
      rotation: number;
      rotationSpeed: number;
      pulse: number;
      pulseSpeed: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = -Math.random() * canvas.height;
        this.code = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        this.speed = 0.5 + Math.random() * 0.8;
        this.fontSize = 11 + Math.random() * 6;
        this.opacity = 0.12 + Math.random() * 0.2;
        this.rotation = (Math.random() - 0.5) * 0.05;
        this.rotationSpeed = (Math.random() - 0.5) * 0.01;
        this.pulse = Math.random() * Math.PI * 2;
        this.pulseSpeed = 0.01 + Math.random() * 0.02;
      }

      update() {
        this.y += this.speed;
        this.rotation += this.rotationSpeed;
        this.pulse += this.pulseSpeed;
        
        if (this.y > canvas.height + 50) {
          this.y = -50;
          this.x = Math.random() * canvas.width;
          this.code = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        }
        
        // Slight horizontal drift with wave motion
        this.x += Math.sin(this.y * 0.005 + this.pulse) * 0.2;
        if (this.x < -150) this.x = canvas.width + 150;
        if (this.x > canvas.width + 150) this.x = -150;
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        
        // Pulse opacity for breathing effect
        const pulseOpacity = this.opacity * (1 + Math.sin(this.pulse) * 0.3);
        ctx.globalAlpha = pulseOpacity;
        
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        
        // Set font with monospace
        ctx.font = `bold ${this.fontSize}px 'Fira Code', 'Courier New', monospace`;
        ctx.fillStyle = this.code.color;
        
        // Add glow effect
        ctx.shadowBlur = 15;
        ctx.shadowColor = this.code.color;
        
        // Draw main text
        ctx.fillText(this.code.text, 0, 0);
        
        // Draw syntax indicator (small dot)
        ctx.save();
        ctx.globalAlpha = pulseOpacity * 0.6;
        ctx.fillStyle = this.code.color;
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(-this.code.text.length * 4 - 8, 0, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        
        ctx.restore();
      }
    }

    // Create particles
    const particles: CodeChar[] = [];
    const particleCount = Math.floor((canvas.width * canvas.height) / 10000);

    for (let i = 0; i < particleCount; i++) {
      particles.push(new CodeChar());
    }

    // Draw connection lines between nearby particles
    const drawConnections = () => {
      if (!ctx) return;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 180 && particles[i].code.type === particles[j].code.type) {
            ctx.save();
            ctx.globalAlpha = (1 - distance / 180) * 0.15;
            ctx.strokeStyle = particles[i].code.color;
            ctx.lineWidth = 0.8;
            ctx.setLineDash([2, 4]);
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }
    };

    // Draw grid pattern in background
    const drawGrid = () => {
      if (!ctx) return;
      ctx.save();
      ctx.strokeStyle = '#0ea5e9';
      ctx.lineWidth = 0.3;
      ctx.globalAlpha = 0.05;
      ctx.setLineDash([5, 10]);

      const gridSize = 50;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      ctx.restore();
    };

    // Animation loop
    let animationFrame: number;
    let frameCount = 0;
    
    const animate = () => {
      // Clear with fade effect for trailing
      ctx.fillStyle = 'rgba(15, 23, 42, 0.03)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw grid occasionally
      if (frameCount % 300 === 0) {
        drawGrid();
      }

      // Draw connections
      drawConnections();

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      frameCount++;
      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Adjust particle count on resize
      const newCount = Math.floor((canvas.width * canvas.height) / 10000);
      while (particles.length < newCount) {
        particles.push(new CodeChar());
      }
      while (particles.length > newCount && particles.length > 0) {
        particles.pop();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  );
};

export default CodeBackground;

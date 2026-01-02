
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import Background from '../components/Background';
import { FaHeart } from 'react-icons/fa';

const Wish = () => {
    const [searchParams] = useSearchParams();
    const senderName = searchParams.get('from') || 'A Special Friend';
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        // Initial explosion
        const duration = 3000;
        const end = Date.now() + duration;

        const frame = () => {
            confetti({
                particleCount: 5,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: ['#ffd700', '#ffffff', '#ff0000']
            });
            confetti({
                particleCount: 5,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: ['#ffd700', '#ffffff', '#ff0000']
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        };
        frame();

        // Show button after animation
        setTimeout(() => {
            setShowButton(true);
        }, 4000);
    }, []);

    const fireWorks = () => {
        const count = 200;
        const defaults = {
            origin: { y: 0.7 }
        };

        function fire(particleRatio, opts) {
            confetti({
                ...defaults,
                ...opts,
                particleCount: Math.floor(count * particleRatio)
            });
        }

        fire(0.25, { spread: 26, startVelocity: 55 });
        fire(0.2, { spread: 60 });
        fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
        fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
        fire(0.1, { spread: 120, startVelocity: 45 });
    };

    return (
        <>
            <Background />
            <div style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '2rem',
                overflow: 'hidden'
            }}>

                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    style={{ marginBottom: '2rem' }}
                >
                    <h2 style={{
                        color: '#fff',
                        fontSize: '1.5rem',
                        marginBottom: '1rem',
                        fontFamily: "'Montserrat', sans-serif",
                        letterSpacing: '3px'
                    }}>
                        {senderName.toUpperCase()} WISHES YOU
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1.5 }}
                >
                    <h1 className="cinematic-text" style={{
                        fontSize: 'clamp(3rem, 10vw, 8rem)',
                        lineHeight: '1.1',
                        marginBottom: '2rem'
                    }}>
                        HAPPY<br />
                        NEW YEAR<br />
                        <span style={{ color: '#fff' }}>2026</span>
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 2 }}
                >
                    <p style={{
                        fontSize: '1.2rem',
                        maxWidth: '600px',
                        margin: '0 auto 3rem',
                        lineHeight: '1.6',
                        color: '#ddd'
                    }}>
                        May this year bring you new happiness, new goals, new achievements, and a lot of new inspirations on your life.
                    </p>
                </motion.div>

                {showButton && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <button
                            onClick={fireWorks}
                            style={{
                                background: 'transparent',
                                border: '2px solid #ffd700',
                                color: '#ffd700',
                                padding: '1rem 2rem',
                                fontSize: '1.2rem',
                                borderRadius: '30px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                transition: 'all 0.3s'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.background = '#ffd700';
                                e.target.style.color = '#000';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.background = 'transparent';
                                e.target.style.color = '#ffd700';
                            }}
                        >
                            <FaHeart /> Send Love Back
                        </button>

                        <div style={{ marginTop: '2rem' }}>
                            <a href="/" style={{ color: '#666', textDecoration: 'none', fontSize: '0.9rem' }}>
                                Create your own wish
                            </a>
                        </div>
                    </motion.div>
                )}
            </div>
        </>
    );
};

export default Wish;

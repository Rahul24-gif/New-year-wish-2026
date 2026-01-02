
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaShareAlt, FaCopy } from 'react-icons/fa';
import Background from '../components/Background';

const Home = () => {
    const [name, setName] = useState('');
    const [generatedLink, setGeneratedLink] = useState('');

    const generateLink = () => {
        if (!name.trim()) return;
        const baseUrl = window.location.origin;
        const link = `${baseUrl}/wish?from=${encodeURIComponent(name)}`;
        setGeneratedLink(link);
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(generatedLink);
        alert('Link copied to clipboard!');
    };

    const shareViaWhatsapp = () => {
        const text = `See this special New Year wish from ${name}: ${generatedLink}`;
        window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
    };

    return (
        <>
            <Background />
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                padding: '2rem',
                textAlign: 'center'
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="glass-panel"
                    style={{ padding: '3rem', maxWidth: '500px', width: '100%' }}
                >
                    <h1 className="cinematic-text" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                        New Year 2026
                    </h1>
                    <p style={{ marginBottom: '2rem', fontSize: '1.2rem', color: '#ccc' }}>
                        Create a cinematic wish for your loved ones.
                    </p>

                    <input
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '1rem',
                            marginBottom: '1.5rem',
                            borderRadius: '8px',
                            border: '1px solid #444',
                            background: 'rgba(0,0,0,0.5)',
                            color: '#fff',
                            fontSize: '1rem',
                            outline: 'none'
                        }}
                    />

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={generateLink}
                        style={{
                            width: '100%',
                            padding: '1rem',
                            borderRadius: '8px',
                            border: 'none',
                            background: 'linear-gradient(45deg, #ffd700, #b8860b)',
                            color: '#000',
                            fontSize: '1.1rem',
                            fontWeight: 'bold',
                            marginBottom: '1.5rem'
                        }}
                    >
                        Create Magic Link
                    </motion.button>

                    {generatedLink && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            style={{ marginTop: '2rem' }}
                        >
                            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                                <button
                                    onClick={copyToClipboard}
                                    style={{
                                        display: 'flex', alignItems: 'center', gap: '0.5rem',
                                        padding: '0.8rem 1.5rem',
                                        background: '#333', color: '#fff', border: '1px solid #555', borderRadius: '8px'
                                    }}
                                >
                                    <FaCopy /> Copy
                                </button>
                                <button
                                    onClick={shareViaWhatsapp}
                                    style={{
                                        display: 'flex', alignItems: 'center', gap: '0.5rem',
                                        padding: '0.8rem 1.5rem',
                                        background: '#25D366', color: '#fff', border: 'none', borderRadius: '8px'
                                    }}
                                >
                                    <FaShareAlt /> Share
                                </button>
                            </div>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </>
    );
};

export default Home;

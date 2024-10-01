import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Chat = ({ employeeId }) => {
    const [messages, setMessages] = useState([]);
    const [content, setContent] = useState('');

    useEffect(() => {
        const fetchMessages = async () => {
            const response = await axios.get(`http://localhost:5000/api/chat/${employeeId}`);
            setMessages(response.data);
        };
        fetchMessages();
    }, [employeeId]);

    const handleSendMessage = async (e) => {
        e.preventDefault();
        const newMessage = { employeeId, sender: 'admin', content };

        try {
            await axios.post('http://localhost:5000/api/chat/send', newMessage);
            setMessages([...messages, newMessage]);
            setContent('');
        } catch (error) {
            console.error('Erreur lors de l\'envoi du message', error);
        }
    };

    return (
        <div>
            <h2>Chat avec l'employé</h2>
            <div>
                {messages.map((msg, index) => (
                    <div key={index}>
                        <strong>{msg.sender}:</strong> {msg.content}
                    </div>
                ))}
            </div>
            <form onSubmit={handleSendMessage}>
                <input
                    type="text"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                />
                <button type="submit">Envoyer</button>
            </form>
        </div>
    );
};

export default Chat;

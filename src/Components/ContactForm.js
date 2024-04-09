import React, { useState } from 'react';

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [question, setQuestion] = useState('');
    const [file, setFile] = useState(null);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleQuestionChange = (e) => {
        setQuestion(e.target.value);
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Récupérer les valeurs des champs du formulaire
    };

    return (
        <>
        <form onSubmit={handleSubmit} className="m-4 w-full max-w-md mx-auto mt-8 bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Contactez nous !</h2>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Nom:
                </label>
                <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email:
                </label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="question">
                    Question ou message:
                </label>
                <textarea
                    id="question"
                    value={question}
                    onChange={handleQuestionChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="file">
                    Envoyez un fichier (optionnel):
                </label>
                <input
                    id="file"
                    type="file"
                    onChange={handleFileChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="flex items-center justify-between">
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Submit
                </button>
            </div>
        </form>
        </>
        
    );
}

export default ContactForm;
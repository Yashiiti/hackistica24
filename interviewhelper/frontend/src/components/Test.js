import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Test = ({ testId }) => {
    const [test, setTest] = useState(null);

    useEffect(() => {
        const fetchTest = async () => {
            try {
                const response = await axios.get(`http://localhost:8002/api/tests/${testId}`);
                setTest(response.data);
            } catch (error) {
                console.error('Error fetching test:', error);
            }
        };
        fetchTest();
    }, [testId]);

    return (
        <div className="container mt-10" style={{marginTop:"80px"}}>
            <h1 className="font-bold text-3xl mb-4" style={{ color: 'black' }}>Test Page</h1>
            {test && (
                <div>
                    <h2 className="font-bold text-2xl mb-2" style={{ color: 'black' }}>{test.title}</h2>
                    <p className="mb-4" style={{ color: 'black' }}>{test.description}</p>
                    <button className="bg-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 addproblem" style={{ color: 'black' }}>
                        <a href={`/add-problem/${testId}`} style={{ color: 'white', textDecoration: 'none' }}>
                            Add Problem
                        </a>
                    </button>
                    <ul style={{ listStyleType: 'none' }}>
                        {test.problems.map(problem => (
                            <li key={problem._id} className="bg-gray-100 rounded-md p-4 mb-4">
                                <h3 className="font-bold text-xl mb-2" style={{ color: 'black' }}>{problem.title}</h3>
                                <p className="mb-2" style={{ color: 'black' }}><strong>Description:</strong> {problem.description}</p>
                                <p className="mb-2" style={{ color: 'black' }}><strong>Sample Input:</strong> {problem.sampleInput}</p>
                                <p className="mb-2" style={{ color: 'black' }}><strong>Output:</strong> {problem.sampleOutput}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Test;

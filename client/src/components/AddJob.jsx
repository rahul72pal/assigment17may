import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AddJob() {
  const [form, setForm] = useState({
    title: '',
    company: '',
    type: 'Full-time',
    location: '',
    description: ''
  });

  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('https://assigment17may.onrender.com/api/jobs', form);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Add New Job</h2>

      <label className="block mb-2">Job Title</label>
      <input name="title" onChange={handleChange} className="w-full mb-4 p-2 border rounded" required />

      <label className="block mb-2">Company Name</label>
      <input name="company" onChange={handleChange} className="w-full mb-4 p-2 border rounded" required />

      <label className="block mb-2">Job Type</label>
      <select name="type" onChange={handleChange} className="w-full mb-4 p-2 border rounded">
        <option value="Full-time">Full-time</option>
        <option value="Part-time">Part-time</option>
      </select>

      <label className="block mb-2">Location</label>
      <input name="location" onChange={handleChange} className="w-full mb-4 p-2 border rounded" required />

      <label className="block mb-2">Description</label>
      <textarea name="description" onChange={handleChange} className="w-full mb-4 p-2 border rounded" rows="4" required />

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
    </form>
  );
}
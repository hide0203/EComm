import { useState } from "react";

export default function StudentForm({ onAdd }) {
  const initial = { name: "", email: "", course: "", message: "" };
  const [formData, setFormData] = useState(initial);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Basic guard: don't add empty name/email
    if (!formData.name.trim() || !formData.email.trim()) return;
    onAdd(formData);
    setFormData(initial); // reset form
  }

  return (
    <form onSubmit={handleSubmit} style={{ width: 360, display: "flex", flexDirection: "column", gap: 8 }}>
      <h2 style={{ margin: 0 }}>Student Form</h2>

      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={formData.email}
        onChange={handleChange}
      />

      <input
        type="text"
        name="course"
        placeholder="Enter Course"
        value={formData.course}
        onChange={handleChange}
      />

      <textarea
        name="message"
        placeholder="Enter Message"
        rows="4"
        value={formData.message}
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
}

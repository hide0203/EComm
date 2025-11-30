export default function SubmittedList({ submissions }) {
  if (!submissions || submissions.length === 0) {
    return <div style={{ marginTop: 20 }}>No submissions yet.</div>;
  }

  return (
    <div style={{ marginTop: 20, maxWidth: 600 }}>
      <h2>Submitted Data</h2>

      {submissions.map((s, idx) => (
        <div
          key={idx}
          style={{
            border: "1px solid #ddd",
            borderRadius: 8,
            padding: 16,
            marginBottom: 12,
            background: "#fff"
          }}
        >
          <p><strong>Entry #{idx + 1}</strong></p>
          <p><strong>Name:</strong> {s.name}</p>
          <p><strong>Email:</strong> {s.email}</p>
          <p><strong>Course:</strong> {s.course}</p>
          <p><strong>Message:</strong> {s.message}</p>
        </div>
      ))}
    </div>
  );
}

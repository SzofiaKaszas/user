import { useState } from "react";

export function Support() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("Support request:", { email, message });
    alert("Köszönjük a visszajelzést! (WIP – nincs beküldés)");
  }

  return (
    <div className="container mt-4">
      <h2>Help / Feedback</h2>
      <p className="text-muted">
        Write to us if you have any questions or suggestions!
      </p>

      <form onSubmit={handleSubmit} className="mt-3">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="pl. you@gmail.com"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            id="message"
            className="form-control"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="
Write down your problem or question..."
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </form>
    </div>
  );
}

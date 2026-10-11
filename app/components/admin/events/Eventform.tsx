
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EventForm() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    location: "",
    date: "",
    time: "",
    price: "",
    capacity: "",
    description: "",
    image: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Frontend demo only — backend not connected yet
    console.log("Event form data:", formData);

    alert("Demo only: Event form submitted!");
  };

  const inputClass =
    "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100";

  const labelClass = "mb-2 block text-sm font-medium text-gray-700";

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
    >
      <div>
        <h2 className="text-lg font-semibold text-gray-900">
          Event Information
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Add the basic details for your event.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="md:col-span-2">
          <label className={labelClass}>Event Title *</label>
          <input
            required
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter event title"
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>Category *</label>
          <select
            required
            name="category"
            value={formData.category}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">Select category</option>
            <option value="Technology">Technology</option>
            <option value="Music">Music</option>
            <option value="Business">Business</option>
            <option value="Education">Education</option>
            <option value="Sports">Sports</option>
          </select>
        </div>

        <div>
          <label className={labelClass}>Location *</label>
          <input
            required
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Enter event location"
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>Event Date *</label>
          <input
            required
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>Event Time *</label>
          <input
            required
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>Ticket Price (BDT) *</label>
          <input
            required
            min="0"
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="e.g. 500"
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>Total Capacity *</label>
          <input
            required
            min="1"
            type="number"
            name="capacity"
            value={formData.capacity}
            onChange={handleChange}
            placeholder="e.g. 200"
            className={inputClass}
          />
        </div>

        <div className="md:col-span-2">
          <label className={labelClass}>Event Image URL</label>
          <input
            type="url"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="https://example.com/event-image.jpg"
            className={inputClass}
          />
        </div>

        <div className="md:col-span-2">
          <label className={labelClass}>Description *</label>
          <textarea
            required
            rows={5}
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe your event..."
            className={inputClass}
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-end gap-3 border-t border-gray-100 pt-5">
        <button
          type="button"
          onClick={() => router.push("/admin/events")}
          className="rounded-xl border border-gray-200 px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700"
        >
          Create Event
        </button>
      </div>
    </form>
  );
}

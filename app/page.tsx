import React from "react";

export default function HomePage() {
  return (
    <div className="max-w-2xl mx-auto space-y-4">
      <h2 className="text-2xl font-bold">Diagnostics Dashboard</h2>
      <form className="space-y-3">
        <input type="text" placeholder="Patient ID" className="w-full border p-2 rounded" />
        <select className="w-full border p-2 rounded">
          <option>Select Gene Panel</option>
          <option>CLCN4</option>
          <option>SPG50</option>
        </select>
        <input type="file" accept=".vcf,.fastq,.gz" className="w-full" />
        <textarea placeholder="Clinical Summary" rows={4} className="w-full border p-2 rounded" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </div>
  );
}

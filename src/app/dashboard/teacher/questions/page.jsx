"use client";

import { useState } from "react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

const questionsData = [
  { id: 1, title: "What is React?", subject: "ICT", type: "MCQ", difficulty: "Easy", status: "Published" },
  { id: 2, title: "Explain Photosynthesis", subject: "Biology", type: "Written", difficulty: "Medium", status: "Draft" },
  { id: 3, title: "Solve 2x + 5 = 15", subject: "Math", type: "MCQ", difficulty: "Easy", status: "Published" },
  { id: 4, title: "What is Newton’s Second Law?", subject: "Physics", type: "Written", difficulty: "Hard", status: "Published" },
  { id: 5, title: "Define Democracy", subject: "Civics", type: "MCQ", difficulty: "Medium", status: "Draft" },
  { id: 6, title: "HTML stands for?", subject: "ICT", type: "MCQ", difficulty: "Easy", status: "Published" },
  { id: 7, title: "Explain World War II", subject: "History", type: "Written", difficulty: "Hard", status: "Published" },
  { id: 8, title: "What is Ohm’s Law?", subject: "Physics", type: "MCQ", difficulty: "Medium", status: "Draft" },
  { id: 9, title: "Define Ecosystem", subject: "Biology", type: "Written", difficulty: "Easy", status: "Published" },
  { id: 10, title: "What is CSS?", subject: "ICT", type: "MCQ", difficulty: "Easy", status: "Published" },
  { id: 11, title: "Factorize x² - 9", subject: "Math", type: "Written", difficulty: "Medium", status: "Draft" },
  { id: 12, title: "Who discovered Gravity?", subject: "Physics", type: "MCQ", difficulty: "Easy", status: "Published" },
];

export default function QuestionsPage() {
  const [filters, setFilters] = useState({
    title: "",
    subject: "All",
    type: "All",
    difficulty: "All",
    status: "All",
  });

  const subjects = ["All", ...new Set(questionsData.map(q => q.subject))];
  const types = ["All", ...new Set(questionsData.map(q => q.type))];
  const difficulties = ["All", ...new Set(questionsData.map(q => q.difficulty))];
  const statuses = ["All", ...new Set(questionsData.map(q => q.status))];

  const filteredQuestions = questionsData.filter((q) =>
    q.title.toLowerCase().includes(filters.title.toLowerCase()) &&
    (filters.subject === "All" || q.subject === filters.subject) &&
    (filters.type === "All" || q.type === filters.type) &&
    (filters.difficulty === "All" || q.difficulty === filters.difficulty) &&
    (filters.status === "All" || q.status === filters.status)
  );

  const total = questionsData.length;
  const published = questionsData.filter(q => q.status === "Published").length;
  const draft = questionsData.filter(q => q.status === "Draft").length;

  const resetFilters = () => {
    setFilters({
      title: "",
      subject: "All",
      type: "All",
      difficulty: "All",
      status: "All",
    });
  };

  return (
    <div className="p-6 bg-base-200 min-h-screen">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Question Bank</h1>
        <button className="btn btn-primary flex items-center gap-2">
          <FaPlus /> Add Question
        </button>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div className="card bg-base-100 shadow-md p-5">
          <p className="text-sm text-gray-500">Total Questions</p>
          <h2 className="text-3xl font-bold">{total}</h2>
        </div>
        <div className="card bg-base-100 shadow-md p-5">
          <p className="text-sm text-gray-500">Published</p>
          <h2 className="text-3xl font-bold text-green-500">{published}</h2>
        </div>
        <div className="card bg-base-100 shadow-md p-5">
          <p className="text-sm text-gray-500">Draft</p>
          <h2 className="text-3xl font-bold text-yellow-500">{draft}</h2>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-base-100 p-4 rounded-xl shadow-md mb-6">
        <div className="grid md:grid-cols-5 gap-4">

          <input
            type="text"
            placeholder="Search by title..."
            className="input input-bordered w-full"
            value={filters.title}
            onChange={(e) =>
              setFilters({ ...filters, title: e.target.value })
            }
          />

          <select
            className="select select-bordered w-full"
            value={filters.subject}
            onChange={(e) =>
              setFilters({ ...filters, subject: e.target.value })
            }
          >
            {subjects.map((s, i) => (
              <option key={i} value={s}>{s}</option>
            ))}
          </select>

          <select
            className="select select-bordered w-full"
            value={filters.type}
            onChange={(e) =>
              setFilters({ ...filters, type: e.target.value })
            }
          >
            {types.map((t, i) => (
              <option key={i} value={t}>{t}</option>
            ))}
          </select>

          <select
            className="select select-bordered w-full"
            value={filters.difficulty}
            onChange={(e) =>
              setFilters({ ...filters, difficulty: e.target.value })
            }
          >
            {difficulties.map((d, i) => (
              <option key={i} value={d}>{d}</option>
            ))}
          </select>

          <select
            className="select select-bordered w-full"
            value={filters.status}
            onChange={(e) =>
              setFilters({ ...filters, status: e.target.value })
            }
          >
            {statuses.map((s, i) => (
              <option key={i} value={s}>{s}</option>
            ))}
          </select>
        </div>

        <div className="mt-4 text-right">
          <button onClick={resetFilters} className="btn btn-outline btn-sm">
            Reset Filters
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-base-100 shadow-md rounded-lg">
        <table className="table w-full">
          <thead className="bg-base-300">
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Subject</th>
              <th>Type</th>
              <th>Difficulty</th>
              <th>Status</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredQuestions.map((q, index) => (
              <tr key={q.id} className="hover">
                <td>{index + 1}</td>
                <td className="font-medium">{q.title}</td>
                <td>{q.subject}</td>
                <td>
                  <span className="badge badge-info">{q.type}</span>
                </td>
                <td>
                  <span
                    className={`badge ${
                      q.difficulty === "Easy"
                        ? "badge-success"
                        : q.difficulty === "Medium"
                        ? "badge-warning"
                        : "badge-error"
                    }`}
                  >
                    {q.difficulty}
                  </span>
                </td>
                <td>
                  <span
                    className={`badge ${
                      q.status === "Published"
                        ? "badge-primary"
                        : "badge-outline"
                    }`}
                  >
                    {q.status}
                  </span>
                </td>
                <td className="flex justify-center gap-2">
                  <button className="btn btn-sm btn-outline btn-info">
                    <FaEdit />
                  </button>
                  <button className="btn btn-sm btn-outline btn-error">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}

            {filteredQuestions.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center py-6 text-gray-500">
                  No questions found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
}
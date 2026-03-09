"use client";

import { useState } from "react";
import { messages } from "@/data/landlords";
import { Paperclip, Circle } from "lucide-react";

export default function TenantMessagesPage() {
  const [selectedMessage, setSelectedMessage] = useState<number | null>(null);
  const selected = messages.find((m) => m.id === selectedMessage);

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Messages</h2>

      <div className="flex flex-col lg:flex-row gap-4">
        {/* Message List */}
        <div className="lg:w-1/2 space-y-2">
          {messages.map((msg) => (
            <button
              key={msg.id}
              onClick={() => setSelectedMessage(msg.id)}
              className={`w-full text-left p-4 rounded-xl transition-colors ${
                selectedMessage === msg.id
                  ? "bg-emerald-50 border-2 border-emerald-200"
                  : "bg-white shadow-sm hover:bg-gray-50"
              }`}
            >
              <div className="flex items-start gap-3">
                <img
                  src={msg.fromImage}
                  alt={msg.from}
                  className="w-10 h-10 rounded-full object-cover shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-sm text-gray-900">
                      {msg.from}
                    </span>
                    <div className="flex items-center gap-2">
                      {msg.hasAttachment && (
                        <Paperclip className="w-3.5 h-3.5 text-gray-400" />
                      )}
                      {msg.unread && (
                        <Circle className="w-2.5 h-2.5 fill-emerald-500 text-emerald-500" />
                      )}
                    </div>
                  </div>
                  <p className="text-sm font-medium text-gray-700 truncate">
                    {msg.subject}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    {new Date(msg.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Message Detail */}
        <div className="lg:w-1/2">
          {selected ? (
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={selected.fromImage}
                  alt={selected.from}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {selected.from}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {new Date(selected.date).toLocaleDateString("en-US", {
                      weekday: "long",
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>
              <h4 className="font-medium text-gray-800 mb-3">
                {selected.subject}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {selected.preview}
              </p>
              {selected.hasAttachment && (
                <div className="mt-4 p-3 bg-gray-50 rounded-lg flex items-center gap-2 text-sm text-gray-600">
                  <Paperclip className="w-4 h-4" />
                  <span>1 attachment</span>
                </div>
              )}
              <div className="mt-6">
                <textarea
                  placeholder="Type your reply..."
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
                  rows={3}
                />
                <button className="mt-2 bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-emerald-700 transition-colors">
                  Send Reply
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-sm p-12 text-center text-gray-400">
              Select a message to read
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

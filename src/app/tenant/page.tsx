"use client";

import { useState } from "react";
import { tenants } from "@/data/tenants";
import { CheckCircle, XCircle, Edit2, Save, X } from "lucide-react";

export default function TenantProfilePage() {
  const [tenant, setTenant] = useState(tenants[0]);
  const [editing, setEditing] = useState(false);
  const [editData, setEditData] = useState(tenant);

  const handleSave = () => {
    setTenant(editData);
    setEditing(false);
  };

  const handleCancel = () => {
    setEditData(tenant);
    setEditing(false);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">
          Profile Information
        </h2>
        {!editing ? (
          <button
            onClick={() => setEditing(true)}
            className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 text-sm font-medium"
          >
            <Edit2 className="w-4 h-4" />
            Edit Profile
          </button>
        ) : (
          <div className="flex gap-2">
            <button
              onClick={handleSave}
              className="flex items-center gap-1 bg-emerald-600 text-white px-3 py-1.5 rounded-lg text-sm hover:bg-emerald-700"
            >
              <Save className="w-3.5 h-3.5" />
              Save
            </button>
            <button
              onClick={handleCancel}
              className="flex items-center gap-1 bg-gray-100 text-gray-600 px-3 py-1.5 rounded-lg text-sm hover:bg-gray-200"
            >
              <X className="w-3.5 h-3.5" />
              Cancel
            </button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <InfoField
          label="Full Name"
          value={editData.fullName}
          editing={editing}
          onChange={(v) => setEditData({ ...editData, fullName: v })}
        />
        <InfoField
          label="Rental Area"
          value={editData.rentalArea}
          editing={editing}
          onChange={(v) => setEditData({ ...editData, rentalArea: v })}
        />
        <InfoField
          label="Salary Range"
          value={editData.salaryRange}
          editing={editing}
          onChange={(v) => setEditData({ ...editData, salaryRange: v })}
        />
        <InfoField
          label="Credit Score Range"
          value={editData.creditScoreRange}
          editing={editing}
          onChange={(v) => setEditData({ ...editData, creditScoreRange: v })}
        />
        <InfoField
          label="Length of Rent"
          value={editData.lengthOfRent}
          editing={editing}
          onChange={(v) => setEditData({ ...editData, lengthOfRent: v })}
        />
        <InfoField
          label="Age"
          value={String(editData.age)}
          editing={editing}
          onChange={(v) =>
            setEditData({ ...editData, age: parseInt(v) || 0 })
          }
        />

        {/* Boolean fields */}
        <div>
          <label className="text-sm text-gray-500 block mb-1">Pets</label>
          <div className="flex items-center gap-2">
            {editing ? (
              <select
                value={editData.pets ? "yes" : "no"}
                onChange={(e) =>
                  setEditData({ ...editData, pets: e.target.value === "yes" })
                }
                className="border border-gray-200 rounded-lg px-3 py-2 text-sm"
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            ) : (
              <span className="flex items-center gap-1 text-gray-900">
                {tenant.pets ? (
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                ) : (
                  <XCircle className="w-4 h-4 text-gray-400" />
                )}
                {tenant.pets ? "Yes" : "No"}
              </span>
            )}
          </div>
        </div>

        <div>
          <label className="text-sm text-gray-500 block mb-1">
            ID Verified
          </label>
          <span className="flex items-center gap-1 text-gray-900">
            {tenant.idVerified ? (
              <CheckCircle className="w-4 h-4 text-emerald-500" />
            ) : (
              <XCircle className="w-4 h-4 text-red-400" />
            )}
            {tenant.idVerified ? "Verified" : "Not Verified"}
          </span>
        </div>

        <div>
          <label className="text-sm text-gray-500 block mb-1">
            Rennant Score
          </label>
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center">
              <span className="text-emerald-700 font-bold">
                {tenant.rennantScore}
              </span>
            </div>
            <span className="text-sm text-gray-500">/ 100</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoField({
  label,
  value,
  editing,
  onChange,
}: {
  label: string;
  value: string;
  editing: boolean;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <label className="text-sm text-gray-500 block mb-1">{label}</label>
      {editing ? (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      ) : (
        <p className="text-gray-900">{value}</p>
      )}
    </div>
  );
}

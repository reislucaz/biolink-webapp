"use client";

import * as React from "react";
import { Input } from "@/components/ui/input";
import { User } from "lucide-react";

export default function Perfil({ id }: { id: string }) {
  const data = [
    {
      id: "1",
      role: "Donor",
      name: "João Lucas dos Santos",
      birthDate: "18/06/1976",
      cpf: "123.456.789-00",
      rg: "123456789",
      nationality: "Brazilian",
      gender: "Male",
      address: "Av Fernando Goes, Quadra 20, Lote 54",
      number: "456",
      neighborhood: "Centro",
      city: "Anápolis",
      state: "GO",
      phone: "(62) 98765-9876",
      bloodType: "AB",
      rhFactor: "POSITIVE",
      healthConditions: "None",
      allergies: "Amoxicillin",
    },
    {
      id: "2",
      role: "Recipient",
      name: "Maria Barbosa Parreira",
      birthDate: "22/09/1989",
      cpf: "987654321-00",
      rg: "987654321",
      nationality: "Brazilian",
      gender: "Female",
      address: "Rua Brasil, Quadra 57, Lote 32",
      number: "456",
      neighborhood: "Asa Sul",
      city: "Brasília",
      state: "DF",
      phone: "(61) 99765-5467",
      bloodType: "O",
      rhFactor: "POSITIVE",
      healthConditions: "Chronic renal failure",
      familyHistory: "Hypertension",
      transplantHistory: "Left kidney, transplanted in 2020",
      waitingListTime: "18 months",
    },
  ];

  const person = data.find(person => person.id === id);

  if (!person) {
    return <div>Profile not found</div>;
  }

  return (
    <div className="p-4 min-w-96 w-full min-h-96 font-sans text-primary">
      <Section title={person.name} person={person} />
    </div>
  );
}

function Section({ title, person }: { title: string; person: Record<string, string | undefined> }) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center justify-center w-16 h-16 bg-foreground rounded-full text-white">
          <User className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-bold text-primary">{title}</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <InputField label="Name" value={person.name} />
        <InputField label="Birth Date" value={person.birthDate} />
        <InputField label="CPF" value={person.cpf} />
        <InputField label="RG" value={person.rg} />
        <InputField label="Nationality" value={person.nationality} />
        <InputField label="Gender" value={person.gender} />
        <InputField label="Address" value={person.address} />
        <InputField label="Number" value={person.number} />
        <InputField label="Neighborhood" value={person.neighborhood} />
        <InputField label="City" value={person.city} />
        <InputField label="State" value={person.state} />
        <InputField label="Phone" value={person.phone} />
        <InputField label="Blood Type" value={person.bloodType} />
        <InputField label="RH Factor" value={person.rhFactor} />
        <InputField label="Health Conditions" value={person.healthConditions} />

        {person.role === "Recipient" && (
          <>
            <InputField label="Family History" value={person.familyHistory || "None"} />
            <InputField
              label="Transplant History"
              value={person.transplantHistory || "None"}
            />
            <InputField
              label="Waiting List Time"
              value={person.waitingListTime || "Not informed"}
            />
          </>
        )}

        {person.role === "Donor" && (
          <>
            <InputField label="Allergies" value={person.allergies || "None"} />
          </>
        )}
      </div>
    </div>
  );
}

function InputField({ label, value }: { label: string; value: string | undefined }) {
  return (
    <div>
      <label className="block text-sm font-medium text-muted-foreground mb-1">
        {label}
      </label>
      <Input
        type="text"
        value={value || ""}
        readOnly
        className="bg-muted text-muted-foreground border-input cursor-not-allowed"
      />
    </div>
  );
}
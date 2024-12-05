"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { User } from "lucide-react";
import Spinner from "@/components/ui/spinner";

interface User {
  id: string;
  role: string;
  name: string;
  birthDate: string;
  cpf: string;
  rg: string;
  nationality: string;
  gender: string;
  address: string;
  number: string;
  neighborhood: string;
  city: string;
  state: string;
  phone: string;
  bloodType: string;
  rhFactor: string;
  healthConditions: string;
  allergies?: string;
  familyHistory?: string;
  transplantHistory?: string;
  waitingListTime?: string;
}

export default function Perfil({ id }: { id: string }) {
  const [person, setPerson] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/mock/user.json')
      .then(response => response.json())
      .then(data => {
        const user = data.find((person: User) => person.id === id);
        setPerson(user || null);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    <Spinner size="2" />;
  }

  if (!person) {
    return <div>Perfil não encontrado</div>;
  }

  return (
    <div className="p-4 min-w-96 w-full min-h-96 font-sans text-primary">
      <Section title={person.name} person={person} />
    </div>
  );
}

function Section({ title, person }: { title: string; person: User }) {
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
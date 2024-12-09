import { IconButton } from "@/components/ui/icon-button";
import { Input } from "@/components/ui/input";
import { Hospital, Minus } from "lucide-react";

interface Hospital {
    id: string;
    name: string;
    cnpj: string;
    address: string;
    number: string;
    cep: string;
    neighborhood: string;
    city: string;
    state: string;
    phone: string;
    email: string;
    status: string
}

export default function HospitalForm({ hospital, title }: { hospital: Hospital | null; title: string }) {
    return (
        <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center justify-center w-16 h-16 bg-foreground rounded-full text-white">
                    <Hospital className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-bold text-primary">{title}</h2>

                <IconButton
                    icon={<Minus width={16} height={16} />}
                    color="gray"
                    className={`mr-1`}
                />

            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <InputField label="HOSPITAL" value={hospital?.name} />
                <InputField label="CNPJ" value={hospital?.cnpj} />
                <InputField label="ENDEREÇO" value={hospital?.address} />
                <InputField label="CEP" value={hospital?.cep} />
                <InputField label="TELEFONE" value={hospital?.phone} />
                <InputField label="EMAIL" value={hospital?.email} />
                <InputField label="STATUS" value={hospital?.status} />
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
"use client";

import { IconButton } from "@/components/ui/icon-button";
import Spinner from "@/components/ui/spinner";
import { Eye, Hospital, Pen, Plus, Trash } from "lucide-react";
import { useEffect, useState } from "react";
import HospitalForm from "./HospitalForm";

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

export default function HospitalTable() {
    const [content, setContent] = useState<string>();
    const [hospitalSelecionando, setHospitalSelecionado] = useState<Hospital>();
    const [hospitals, setHostitals] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/mock/hospital.json')
            .then(response => response.json())
            .then(data => {
                setHostitals(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
                setLoading(false);
            });
    });

    if (loading) {
        return <Spinner size="2" />;
    }

    if (!hospitals) {
        return <div>Hospitais não encontrado</div>;
    }

    return (
        <div className="w-full flex flex-col items-center">
            <div className="flex items-center gap-4 mb-4">
                <h2 className="text-2xl font-bold">Hospital</h2>
                <IconButton
                    icon={<Plus width={16} height={16} />}
                    color="gray"
                    onClick={() => {
                        setContent('add');
                    }}
                    className={`mr-1 text-right`}
                />
            </div>

            <table className="w-full border-separate border-spacing-y-1">
                <thead className="text-left">
                    <tr>
                        <th className="px-4 py-2 bg-secondary sticky top-0 z-10 shadow-sm">Nome</th>
                        <th className="px-4 py-2 bg-secondary sticky top-0 z-10 shadow-sm">Localização</th>
                        <th className="px-4 py-2 bg-secondary sticky top-0 z-10 shadow-sm">Status</th>
                        <th className="px-4 py-2 bg-secondary sticky top-0 z-10 shadow-sm"></th>
                    </tr>
                </thead>
                <tbody>
                    {hospitals.map((hospital: Hospital) => (
                        <tr
                            className="rounded-md overflow-hidden shadow-sm bg-primary-foreground border"
                            key={hospital.id}>
                            <td className={`px-4 py-1 border-foreground border-y border-l rounded-l-md`}>{hospital.name}</td>
                            <td className={`px-4 py-1 border-foreground border-y`}>{hospital.city}-{hospital.state}</td>
                            <td className={`px-4 py-1 border-foreground border-y`}>{hospital.status ? 'ATIVO' : 'INATIVO'}</td>
                            <td className={`px-4 py-1 border-foreground border-y border-r rounded-r-md text-right`}>
                                <IconButton
                                    icon={<Eye width={16} height={16} />}
                                    color="gray"
                                    className={`mr-1`}
                                    onClick={() => {
                                        setContent('view');
                                        setHospitalSelecionado(hospital)
                                    }} />

                                <IconButton
                                    icon={<Pen width={16} height={16} />}
                                    color="gray"
                                    className={`mr-1`}
                                    onClick={() => {
                                        setContent('edit');
                                        setHospitalSelecionado(hospital)
                                    }} />

                                <IconButton
                                    icon={<Trash width={16} height={16} />}
                                    color="gray"
                                    className={`mr-1`}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className={`transition-opacity duration-500 ease-in-out ${content === 'add' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                {content === 'add' && hospitalSelecionando != undefined && (
                    <div className="flex justify-center py-10 px-10 items-center flex-row gap-4 mt-6 bg-white rounded-lg">
                        <HospitalForm hospital={null} title="Cadastrar Hospital" />
                    </div>
                )}
            </div>

            <div className={`transition-opacity duration-500 ease-in-out ${content === 'view' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                {content === 'view' && hospitalSelecionando != undefined && (
                    <div className="flex justify-center py-10 px-10 items-center flex-row gap-4 mt-6 bg-white rounded-lg">
                        <HospitalForm hospital={hospitalSelecionando} title="Visualizar Hospital" />
                    </div>
                )}
            </div>

            <div className={`transition-opacity duration-500 ease-in-out ${content === 'edit' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                {content === 'edit' && hospitalSelecionando != undefined && (
                    <div className="flex justify-center py-10 px-10 items-center flex-row gap-4 mt-6 bg-white rounded-lg">
                        <HospitalForm hospital={hospitalSelecionando} title="Alterar Hospital" />
                    </div>
                )}
            </div>
        </div>
    );

}
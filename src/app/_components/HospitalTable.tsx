"use client";

import { IconButton } from "@/components/ui/icon-button";
import Spinner from "@/components/ui/spinner";
import { Eye, Hospital, Pen, Trash } from "lucide-react";
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
            <h1>HOSPITAL</h1>

            <table cellPadding={10} cellSpacing={0} style={{ width: "100%" }}>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Localização</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {hospitals.map((hospital: Hospital) => (
                        <tr key={hospital.id}>
                            <td>{hospital.name}</td>
                            <td>{hospital.city}-{hospital.state}</td>
                            <td>{hospital.status ? 'ATIVO' : 'INATIVO'}</td>
                            <td>
                                <IconButton
                                    icon={<Eye width={18} height={18} />}
                                    color="gray"
                                    variant="outline"
                                    onClick={() => {
                                        setContent('view');
                                        setHospitalSelecionado(hospital)
                                    }} />

                                <IconButton
                                    icon={<Pen width={18} height={18} />}
                                    color="gray"
                                    variant="outline"
                                    onClick={() => {
                                        setContent('edit');
                                        setHospitalSelecionado(hospital)
                                    }} />

                                <IconButton
                                    icon={<Trash width={18} height={18} />}
                                    color="gray"
                                    variant="outline" />

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

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


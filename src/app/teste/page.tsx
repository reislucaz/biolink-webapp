"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import logoB from "@/app/_assets/logo-branca.svg";
import { IconButton } from "@/components/ui/icon-button";
import { Bell, User } from "lucide-react";
import { CustomDropdownMenu } from "@/components/ui/drop-menu";
import Card from "@/components/ui/card";
import Perfil from "../_components/perfil";
import Spinner from "@/components/ui/spinner";

const ITEMS_PER_PAGE = 5;

interface User {
  id: string;
  role: string;
  name: string;
}

interface Notification {
  id: number;
  userId: string;
  message: string;
}

export default function Teste() {
  const searchParams = useSearchParams();
  const userId = searchParams.get("userId");

  const [content, setContent] = useState<'home' | 'notifications' | 'profile'>('home');
  const [currentPage, setCurrentPage] = useState(1);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingNotifications, setLoadingNotifications] = useState(false);

  useEffect(() => {
    fetch('/mock/user.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setUsers(data);
        const user = userId ? data.find((u: User) => u.id === userId) : data[0];
        setCurrentUser(user || data[0]);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erro ao buscar dados:', error);
        setLoading(false);
      });
  }, [userId]);

  const fetchNotifications = (userId: string) => {
    setLoadingNotifications(true);
    fetch('/mock/notification.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const userNotifications = data.filter((notification: Notification) => notification.userId === userId);
        setNotifications(userNotifications);
        setLoadingNotifications(false);
      })
      .catch(error => {
        console.error('Erro ao buscar notificações:', error);
        setLoadingNotifications(false);
      });
  };

  if (loading) {
    return <Spinner size="2" />;
  }

  if (!currentUser) {
    return <div>Erro ao carregar usuário</div>;
  }

  const totalPages = Math.ceil(notifications.length / ITEMS_PER_PAGE);
  const currentNotifications = notifications.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="py-10 px-10 gap-5 min-w-96 min-h-96 h-full max-h-screen w-full rounded-lg overflow-auto">
      <div className="flex justify-between items-start flex-row">
        <Image width={120} height={145} src={logoB} alt="logo" className="size-20" />
        <div className="ml-auto flex gap-5">
          <IconButton
            icon={<Bell width={18} height={18} />}
            radius="full"
            className="size-12"
            onClick={() => {
              setContent('notifications');
              fetchNotifications(currentUser.id);
            }}
          />
          <CustomDropdownMenu profileType={currentUser.role} onProfileClick={setContent}>
            <IconButton
              icon={<User width={18} height={18} />}
              radius="full"
              color="gray"
              variant="outline"
              highContrast
              className="size-12"
            />
          </CustomDropdownMenu>
        </div>
      </div>

      <div className="flex py-10 px-10 flex-col justify-center min-w-96 min-h-96">
        <div className={`transition-opacity duration-500 ease-in-out ${content === 'home' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          {content === 'home' && (
            <div className="flex justify-start items-center flex-row gap-4 mt-10">
              <Image width={120} height={145} src={logoB} alt="logo" className="size-80" />
              <div className="flex flex-col gap-4">
                <h1 className="text-white text-4xl font-bold">Bem-vindo ao BioLink</h1>
                <h2 className="text-white text-2xl">Olá, <a className="font-bold">{currentUser.name}</a></h2>
                <h3 className="text-white text-xl">
                  {currentUser.role === "Receptora"
                    ? "Estamos aqui para te apoiar nessa jornada de esperança e renovação. Sabemos que o processo de espera por um transplante pode ser desafiador, mas você não está sozinho. Nosso sistema foi desenvolvido para garantir que você tenha todas as informações necessárias, de forma segura e acessível, durante cada etapa desse caminho."
                    : "Agradecemos por fazer parte dessa rede de solidariedade e esperança. Sua generosidade tem o poder de salvar vidas e transformar o futuro de muitas pessoas. Aqui você pode acompanhar o seu cadastro de doador, verificar a compatibilidade para doações e atualizar suas informações sempre que necessário."
                  }
                </h3>
              </div>
            </div>
          )}
        </div>

        <div className={`transition-opacity duration-500 ease-in-out ${content === 'notifications' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          {content === 'notifications' && (
            <div className="flex flex-col justify-center py-10 px-10 items-center gap-4  bg-white rounded-lg w-full">
              {loadingNotifications ? (
                <Spinner size="2" />
              ) : (
                <Card variant="gray" width="w-full">
                  <div className="flex flex-col gap-4">
                    <h3 className="text-2xl font-bold text-primary">Notificações</h3>
                    {currentNotifications.map(notification => (
                      <div key={notification.id} className="p-2 bg-white rounded shadow">
                        {notification.message}
                      </div>
                    ))}
                    <div className="flex justify-between mt-4">
                      <button
                        className="px-4 py-2 bg-primary text-white rounded"
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                      >
                        Anterior
                      </button>
                      <button
                        className="px-4 py-2 bg-primary text-white rounded"
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                      >
                        Próximo
                      </button>
                    </div>
                  </div>
                </Card>
              )}
            </div>
          )}
        </div>

        <div className={`transition-opacity duration-500 ease-in-out ${content === 'profile' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          {content === 'profile' && (
            <div className="flex justify-center py-10 px-10 items-center flex-row gap-4 mt-6 bg-white rounded-lg">
              <Perfil id={currentUser.id} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
import { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, Transition } from '@headlessui/react';
import { LogOut, User, Settings, HelpCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const userNavItems = [
  { icon: User, label: "Perfil", link: "/profile" },
  { icon: Settings, label: "Configurações", link: "/settings" },
  { icon: HelpCircle, label: "Ajuda & Suporte", link: "#" },
];

export function UserNav() {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/auth');
  };

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="flex rounded-full bg-white/10 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
        <span className="sr-only">Abrir menu do usuário</span>
        <div className="relative h-10 w-10 rounded-full">
          <img
            className="h-full w-full rounded-full"
            src="/placeholder.svg"
            alt="Usuário"
          />
          <span className="absolute -bottom-px -right-px flex h-4 w-4 items-center justify-center">
            <span className="block h-3 w-3 rounded-full bg-green-400 ring-2 ring-white" />
          </span>
        </div>
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-4 py-3">
            <p className="text-sm font-medium text-gray-900">Gestor Demo</p>
            <p className="truncate text-xs text-gray-500">gestor@twiggy.ai</p>
          </div>
          <div className="border-t border-gray-200" />
          
          {userNavItems.map((item) => (
            <Menu.Item key={item.label}>
              {({ active }) => (
                <Link
                  to={item.link}
                  className={`${
                    active ? 'bg-gray-100' : ''
                  } flex items-center px-4 py-2 text-sm text-gray-700`}
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.label}
                </Link>
              )}
            </Menu.Item>
          ))}
          
          <div className="border-t border-gray-200" />
          
          <Menu.Item>
            {({ active }) => (
              <button
                onClick={handleSignOut}
                className={`${
                  active ? 'bg-gray-100' : ''
                } flex w-full items-center px-4 py-2 text-sm text-gray-700`}
              >
                <LogOut className="mr-2 h-4 w-4" />
                Sair
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

import { Auth } from '@/types';
import { usePage } from '@inertiajs/react';
import { useEcho } from '@laravel/echo-react';
import { createContext, useContext, useState, ReactNode } from 'react';

type AppContextType = {
  notification: any;
  resetNotification: () => void;
}

type AuthProps = {
  auth: Auth;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const { auth } = usePage<AuthProps>().props
  const [notification, setNotification] = useState<any>();

  const userChannel = (): string | undefined => {
      if (auth.user.roleuser.slug === 'admin' || auth.user.roleuser.slug === 'approval' || auth.user.roleuser.slug === 'checker') {
          return "tim-bos";
      } else if (auth.user.roleuser.slug === 'kepala-sekolah' || auth.user.roleuser.slug === 'bendahara') {
          return "sekolah." + auth.user.roleuser.sekolah_id;
      } else {
          return undefined;
      }
  };

  const resetNotification = () => {
      setNotification(undefined);
  };

  useEcho<{newData:any}>(`${userChannel()}`, 'TransaksiEvent', (e: {newData:any}) => {
      setNotification(e.newData);
  });

  // const { leaveChannel, stopListening, listen } = useEcho<{newData:any}>(
  //   `${userChannel()}`,
  //   "TransaksiEvent",
  //   (e: {newData:any}) => {
  //     setNotification(e.newData);
  //   }
  // );

  return (
    <AppContext.Provider value={{ notification, resetNotification }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
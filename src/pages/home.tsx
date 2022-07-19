import { useEffect, useCallback, useState } from 'react';

import { Page, UsersList } from '@/components';
import { UserContext } from '@/contexts';
import { byRegistered } from '@/utils';

import type { User } from '@/types';

type Response = {
  info: object;
  results: Array<User>;
};
export const Home = () => {
  const [myData, setMyData] = useState({} as Response);
  const [userContext, setUserContext] = useState({} as UserContext);

  const getData = async (): Promise<Response> => {
    const res = await fetch(
      'https://randomuser.me/api?results=100&nat=us,dk,fr,gb,br'
    );
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    async function fetchData() {
      const original = await getData();
      setMyData(original);
    }
    fetchData();
  }, []);

  const getUsers = useCallback(() => {
    if (myData.results) {
      const results = Array.from(myData.results).filter(byRegistered);
      return results;
    }
  }, [myData]);

  const setUsers = (users) => {
    updateContext({ users });
  };

  const updateContext = (context) => {
    setUserContext((prev) => Object.assign({}, prev, context));
  };

  useEffect(() => {
    setUserContext({
      original: getUsers(),
      users: getUsers(),
      setUsers,
    });
  }, [myData, getUsers]);

  return (
    <UserContext.Provider value={userContext}>
      <Page name="home">
        <UsersList />
      </Page>
    </UserContext.Provider>
  );
};

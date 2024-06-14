import { createStoreon } from 'storeon';
import { storeonDevtools } from 'storeon/devtools';

interface State {
  user: {
    username: string | null;
  };
}

interface Events {
  'login': { username: string };
  'logout': undefined;
}

const user = (store: any) => {
  store.on('@init', () => ({ user: { username: null } }));
  store.on('login', (state, { username }) => ({
    user: { username }
  }));
  store.on('logout', () => ({ user: { username: null } }));
};

export const store = createStoreon<State, Events>([user, storeonDevtools()]);

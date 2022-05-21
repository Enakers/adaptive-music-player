import Home from '@components/Home/Home';
import Input from '@components/Input/Input';
import Player from '@components/Player';
import Visualiser from '@components/Visualiser/Visualiser';
import { Box, CircularProgress } from '@mui/material';
import { useStore } from '@stores';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';

function App() {
  const store = useStore();

  useEffect(() => {
    store.initData();
  }, []);

  if (store.loading) {
    return (
      <Box display="flex" alignItems="center" minHeight="100%" justifyContent="center">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      {!store.playerStore.enabled && <Home />}
      <Input />
      <Player />
      <Visualiser />
      <ToastContainer position="bottom-right" />
    </>
  );
}

export default observer(App);

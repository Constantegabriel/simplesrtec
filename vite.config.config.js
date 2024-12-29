import chokidar from 'chokidar';

export default {
  server: {
    watch: {
      ignored: /node_modules/,
      awaitWriteFinish: {
        stabilityThreshold: 1000,
      },
    },
  },
};

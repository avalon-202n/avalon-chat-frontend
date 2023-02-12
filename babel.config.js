module.exports = function (api) {
  api.cache(false);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['react-native-reanimated/plugin'],
      
      [
        'module-resolver',

        {
          root: ['.'],
          alias: {
            '@component': './component',
            '@screen': './screen',
            '@public': './public',
            '@root': '.',
          },
        },
      ],
    ],
  };
};

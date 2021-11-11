module.exports = {
  devServer: {
    port: 5051,
  },
  chainWebpack: (config) => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap((options) => ({
        ...options,
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('vue3-message'),
        },
      }));
  },
};

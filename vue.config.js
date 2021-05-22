module.exports = {
    lintOnSave: false,
    css: {
        loaderOptions: {
          less: {
            lessOptions: {
              modifyVars: {
                'primary-color': '#1d8f76',
                'link-color': '#1d8f76',
                'border-radius-base': '2px',
              },
              javascriptEnabled: true,
            },
          },
        },
      },
}
import path from 'path'

export default {
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    'react-static-plugin-preact',
    require.resolve('react-static-plugin-reach-router'),
  ],
}

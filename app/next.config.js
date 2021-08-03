module.exports = {
  basePath: "/transithealth",
  distDir: "build",
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          }
        ],
      },
    ]
  }
}
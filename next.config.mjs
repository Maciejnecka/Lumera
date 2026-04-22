/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    unoptimized: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      type: 'asset/resource',
    });
    config.module.rules.push({
      test: /\.(ttf|otf|woff|woff2)$/i,
      type: 'asset/resource',
    });

    return config;
  },
  async redirects() {
    return [
      {
        source: '/folie-przeciws%C5%82oneczne-zewn%C4%99trzne',
        destination: '/folie-przeciwsloneczne-zewnetrzne',
        permanent: true,
      },
      {
        source: '/folie-przeciws%C5%82oneczne-wewn%C4%99trzne',
        destination: '/folie-przeciwsloneczne-wewnetrzne',
        permanent: true,
      },
      {
        source: '/folie-na-poliw%C4%99glan',
        destination: '/folie-na-poliweglan',
        permanent: true,
      },
      {
        source: '/folie-mro%C5%BCone',
        destination: '/folie-mrozone',
        permanent: true,
      },
      {
        source: '/folie-antyw%C5%82amaniowe',
        destination: '/folie-antywlamaniowe',
        permanent: true,
      },
      {
        source: '/folie-zabezpieczaj%C4%85ce',
        destination: '/folie-zabezpieczajace',
        permanent: true,
      },
      {
        source: '/folie-anty-pods%C5%82uchowe',
        destination: '/folie-anty-podsluchowe',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

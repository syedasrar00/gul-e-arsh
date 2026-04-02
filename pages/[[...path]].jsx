import dynamic from 'next/dynamic';

const NextAppShell = dynamic(() => import('../src/NextAppShell'), {
  ssr: false,
});

export default function CatchAllPage() {
  return <NextAppShell />;
}

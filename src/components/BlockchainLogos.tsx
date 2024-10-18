import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'


// SVG components for each logo
const HbarLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2500 2500" width="40" height="40">
    <path d="M1250 0C559.64 0 0 559.64 0 1250s559.64 1250 1250 1250 1250-559.64 1250-1250S1940.36 0 1250 0" fill="#222222"/>
    <path d="M1758.12 1790.62h-158.74v-337.49H900.62v337.49H741.87V708.87h158.75v337.49h698.76V708.87h158.74v1081.75zm-850-850c0 67.08-54.35 121.43-121.43 121.43s-121.43-54.35-121.43-121.43 54.35-121.43 121.43-121.43 121.43 54.35 121.43 121.43m1081.25 0c0 67.08-54.35 121.43-121.43 121.43s-121.43-54.35-121.43-121.43 54.35-121.43 121.43-121.43 121.43 54.35 121.43 121.43" fill="#fff"/>
  </svg>
)

const CardanoLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="40" height="40">
    <circle cx="250" cy="250" r="250" fill="#0033ad"/>
    <path d="M214.3 285.7c-23.3 0-42.2-18.9-42.2-42.2s18.9-42.2 42.2-42.2 42.2 18.9 42.2 42.2-18.9 42.2-42.2 42.2zm0-74.4c-17.8 0-32.2 14.4-32.2 32.2s14.4 32.2 32.2 32.2 32.2-14.4 32.2-32.2-14.4-32.2-32.2-32.2z" fill="#fff"/>
    <path d="M285.7 357.1c-23.3 0-42.2-18.9-42.2-42.2s18.9-42.2 42.2-42.2 42.2 18.9 42.2 42.2-18.9 42.2-42.2 42.2zm0-74.4c-17.8 0-32.2 14.4-32.2 32.2s14.4 32.2 32.2 32.2 32.2-14.4 32.2-32.2-14.4-32.2-32.2-32.2z" fill="#fff"/>
    <path d="M285.7 214.3c-23.3 0-42.2-18.9-42.2-42.2s18.9-42.2 42.2-42.2 42.2 18.9 42.2 42.2-18.9 42.2-42.2 42.2zm0-74.4c-17.8 0-32.2 14.4-32.2 32.2s14.4 32.2 32.2 32.2 32.2-14.4 32.2-32.2-14.4-32.2-32.2-32.2z" fill="#fff"/>
  </svg>
)

const SolanaLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 397.7 311.7" width="40" height="40">
    <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="360.879" y1="351.455" x2="141.213" y2="-69.294" gradientTransform="matrix(1 0 0 -1 0 314)">
      <stop offset="0" stopColor="#00ffa3"/>
      <stop offset="1" stopColor="#dc1fff"/>
    </linearGradient>
    <path d="M64.6 237.9c2.4-2.4 5.7-3.8 9.2-3.8h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1l62.7-62.7z" fill="url(#a)"/>
    <linearGradient id="b" gradientUnits="userSpaceOnUse" x1="264.829" y1="401.601" x2="45.163" y2="-19.148" gradientTransform="matrix(1 0 0 -1 0 314)">
      <stop offset="0" stopColor="#00ffa3"/>
      <stop offset="1" stopColor="#dc1fff"/>
    </linearGradient>
    <path d="M64.6 3.8C67.1 1.4 70.4 0 73.8 0h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1L64.6 3.8z" fill="url(#b)"/>
    <linearGradient id="c" gradientUnits="userSpaceOnUse" x1="312.548" y1="376.688" x2="92.882" y2="-44.061" gradientTransform="matrix(1 0 0 -1 0 314)">
      <stop offset="0" stopColor="#00ffa3"/>
      <stop offset="1" stopColor="#dc1fff"/>
    </linearGradient>
    <path d="M333.1 120.1c-2.4-2.4-5.7-3.8-9.2-3.8H6.5c-5.8 0-8.7 7-4.6 11.1l62.7 62.7c2.4 2.4 5.7 3.8 9.2 3.8h317.4c5.8 0 8.7-7 4.6-11.1l-62.7-62.7z" fill="url(#c)"/>
  </svg>
)

const EthLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 784.37 1277.39" width="40" height="40">
    <g>
      <polygon fill="#343434" points="392.07,0 383.5,29.11 383.5,873.74 392.07,882.29 784.13,650.54 "/>
      <polygon fill="#8C8C8C" points="392.07,0 -0,650.54 392.07,882.29 392.07,472.33 "/>
      <polygon fill="#3C3C3B" points="392.07,956.52 387.24,962.41 387.24,1263.28 392.07,1277.38 784.37,724.89 "/>
      <polygon fill="#8C8C8C" points="392.07,1277.38 392.07,956.52 -0,724.89 "/>
      <polygon fill="#141414" points="392.07,882.29 784.13,650.54 392.07,472.33 "/>
      <polygon fill="#393939" points="0,650.54 392.07,882.29 392.07,472.33 "/>
    </g>
  </svg>
)

const PolygonLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38.4 33.5" width="40" height="40">
    <path d="M29,10.2c-0.7-0.4-1.6-0.4-2.4,0L21,13.5l-3.8,2.1l-5.5,3.3c-0.7,0.4-1.6,0.4-2.4,0L5,16.3 c-0.7-0.4-1.2-1.2-1.2-2.1v-5c0-0.8,0.4-1.6,1.2-2.1l4.3-2.5c0.7-0.4,1.6-0.4,2.4,0L16,7.2c0.7,0.4,1.2,1.2,1.2,2.1v3.3l3.8-2.2V7 c0-0.8-0.4-1.6-1.2-2.1l-8-4.7c-0.7-0.4-1.6-0.4-2.4,0L1.2,5C0.4,5.4,0,6.2,0,7v9.4c0,0.8,0.4,1.6,1.2,2.1l8.1,4.7 c0.7,0.4,1.6,0.4,2.4,0l5.5-3.2l3.8-2.2l5.5-3.2c0.7-0.4,1.6-0.4,2.4,0l4.3,2.5c0.7,0.4,1.2,1.2,1.2,2.1v5c0,0.8-0.4,1.6-1.2,2.1 L29,28.8c-0.7,0.4-1.6,0.4-2.4,0l-4.3-2.5c-0.7-0.4-1.2-1.2-1.2-2.1V21l-3.8,2.2v3.3c0,0.8,0.4,1.6,1.2,2.1l8.1,4.7 c0.7,0.4,1.6,0.4,2.4,0l8.1-4.7c0.7-0.4,1.2-1.2,1.2-2.1V17c0-0.8-0.4-1.6-1.2-2.1L29,10.2z" fill="#8247E5"/>
  </svg>
)

const BscLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2500 2500" width="40" height="40">
    <circle cx="1250" cy="1250" r="1250" fill="#f3ba2f"/>
    <path d="M764.48 992.67 1250 507.15l485.59 485.52-282.6 282.6-203-202.99-202.99 202.99-282.52-282.6z" fill="#fff"/>
    <path d="m617.13 1140.03 132.85-132.85 132.85 132.85-132.85 132.85-132.85-132.85zm632.87 0 132.85-132.85 132.85 132.85-132.85 132.85-132.85-132.85z" fill="#fff"/>
    <path d="m764.48 1507.33 203-202.99 202.99 202.99 282.6-282.6 485.59 485.52-485.59 485.59-282.6-282.6-202.99 202.99-203-202.99-282.52 282.6-485.52-485.59 485.52-485.52 282.52 282.6z" fill="#fff"/>
  </svg>
)

const BitcoinLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 2000" width="40" height="40">
    <circle cx="1000" cy="1000" r="1000" fill="#F7931A"/>
    <path d="M1437.5 936.1c21.8-145.7-89.3-224.1-241.3-276.5l49.3-197.6-120.4-30-48 192.4c-31.6-7.9-64.1-15.3-96.4-22.7l48.3-193.7-120.3-30-49.3 197.5c-26.2-6-51.9-11.9-76.9-18.1l.1-.6-166-41.5-32 128.4s89.3 20.5 87.4 21.7c48.7 12.2 57.5 44.5 56 70.1l-56.1 225c3.4.9 7.7 2.1 12.5 4-4-1-8.3-2.1-12.7-3.1l-78.6 315.1c-6 14.8-21 37-55 28.6 1.2 1.7-87.5-21.8-87.5-21.8l-59.8 137.8 156.6 39c29.1 7.3 57.7 15 85.8 22.2l-49.7 199.7 120.2 30 49.3-197.7c32.8 8.9 64.7 17.1 95.9 24.8l-49.1 196.9 120.4 30 49.7-199.4c205.2 38.8 359.5 23.1 424.3-162.4 52.2-149.2-2.6-235.2-110.3-291.1 78.4-18.1 137.6-69.5 153.4-175.9zm-274.5 383.6c-37.1 149.2-288.3 68.6-369.9 48.4l66-264.4c81.6 20.4 343.1 60.7 303.9 216zm37.1-386.8c-33.8 135.7-242.6 66.7-310.2 49.8l59.8-239.9c67.6 16.9 285 48.4 250.4 190.1z" fill="#fff"/>
  </svg>
)

const AvalancheLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1503 1504" width="40" height="40">
    <circle cx="751.5" cy="752" r="751.5" fill="#e84142"/>
    <path d="M384.7 591.2c9.7-16.8 25.5-16.8 35.2 0l174.7 302.7c9.7 16.8 1.8 30.5-17.6 30.5H227.6c-19.4 0-27.3-13.7-17.6-30.5l174.7-302.7zm476.1 302.6 238.1-412.6c9.7-16.8 25.5-16.8 35.2 0l174.7 302.7c9.7 16.8 1.8 30.5-17.6 30.5H878.4c-19.4.1-27.3-13.6-17.6-30.4v-.2z" fill="#fff"/>
  </svg>
)

const AvaxLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1503 1504" width="40" height="40">
    <circle cx="751.5" cy="752" r="751.5" fill="#e84142"/>
    <path d="M384.7 591.2c9.7-16.8 25.5-16.8 35.2 0l174.7 302.7c9.7 16.8 1.8 30.5-17.6 30.5H227.6c-19.4 0-27.3-13.7-17.6-30.5l174.7-302.7zm476.1 302.6 238.1-412.6c9.7-16.8 25.5-16.8 35.2 0l174.7 302.7c9.7 16.8 1.8 30.5-17.6 30.5H878.4c-19.4.1-27.3-13.6-17.6-30.4v-.2z" fill="#fff"/>
  </svg>
)

const logos = [
  { component: BitcoinLogo, alt: 'Bitcoin' },
  { component: HbarLogo, alt: 'Hedera' },
  { component: EthLogo, alt: 'Ethereum' },
  { component: PolygonLogo, alt: 'Polygon' },
  { component: BscLogo, alt: 'Binance Smart Chain' },
  { component: AvalancheLogo, alt: 'Avalanche' },
  { component: AvaxLogo, alt: 'Avax' },
  { component: CardanoLogo, alt: 'Cardano' },
  { component: SolanaLogo, alt: 'Solana' },
]

export const BlockchainLogos: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      dragFree: true,
      containScroll: 'trimSnaps',
      slidesToScroll: 1,
    },
    [AutoScroll({ playOnInit: true, stopOnInteraction: false, speed: 1 })]
  )

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit()
    }
  }, [emblaApi])

  return (
    <div className="w-full bg-white py-12">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Supported Blockchains</h2>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {[...logos, ...logos].map((Logo, index) => (
              <div key={index} className="flex-shrink-0 mx-4">
                <Logo.component />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
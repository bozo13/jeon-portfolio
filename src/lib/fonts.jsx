import localFont from 'next/font/local'


//👇 Configure our local font object
export const KHInterferenceTRIAL = localFont({ src: 
    [
        {
          path: '/fonts/KHInterferenceTRIAL-Light.woff2',
          weight: '400',
          style: 'normal',
          variable: '--KH-Inter',
        },
    ]
    })


export const KHTekaTRIALLight = localFont({ src: 
    [
        {
          path: '/fonts/KHTekaTRIAL-Light.woff2',
          weight: '400',
          style: 'normal',
          variable: '--KH-Teka',
        },
    ]
    })
 
console.log(
    KHTekaTRIALLight
)
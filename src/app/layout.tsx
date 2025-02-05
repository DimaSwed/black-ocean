import * as React from 'react'
import type { Metadata } from 'next'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { ThemeWrapper } from '@/providers/provider-theme'
import StoreProvider from '@/providers/provider-store'
import I18nProvider from '@/providers/provider-i18n'
import '@/styles/globals.sass'
import Footer from '@/components/Footer/Footer'
import { Box } from '@mui/material'
import { cookies } from 'next/headers'

export const metadata: Metadata = {
  title: 'BLACK OCEAN',
  description: 'BLACK OCEAN'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const lang = cookies().get('lang')?.value || 'eng'

  return (
    <html lang="en">
      <body style={{ fontFamily: 'Open Sans, sans-serif' }}>
        <StoreProvider>
          <AppRouterCacheProvider>
            <ThemeWrapper>
              <I18nProvider lang={lang}>
                {children}
                <Box sx={{ backgroundColor: 'text.primary' }}>
                  <Footer />
                </Box>
              </I18nProvider>
            </ThemeWrapper>
          </AppRouterCacheProvider>
        </StoreProvider>
      </body>
    </html>
  )
}

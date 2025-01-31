import * as React from 'react'
import type { Metadata } from 'next'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { ThemeWrapper } from '@/providers/provider-theme'
import StoreProvider from '@/providers/provider-store'
import '@/styles/globals.sass'
import Footer from '@/components/Footer/Footer'
import { Box } from '@mui/material'

export const metadata: Metadata = {
  title: 'BLACK OCEAN',
  description: 'BLACK OCEAN'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'Open Sans, sans-serif' }}>
        <StoreProvider>
          <AppRouterCacheProvider>
            <ThemeWrapper>
              {children}
              <Box sx={{ backgroundColor: 'text.primary' }}>
                <Footer />
              </Box>
            </ThemeWrapper>
          </AppRouterCacheProvider>
        </StoreProvider>
      </body>
    </html>
  )
}

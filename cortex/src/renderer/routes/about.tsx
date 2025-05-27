import LogoXHS from '@/components/icons/LogoXHS'
import LinkTargetBlank from '@/components/Link'
import Markdown from '@/components/Markdown'
import Page from '@/components/Page'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import WarningAmberIcon from '@mui/icons-material/WarningAmber'
import { Alert, Box, Button, useTheme } from '@mui/material'
import { createFileRoute } from '@tanstack/react-router'
import { useAtom, useAtomValue } from 'jotai'
import { MouseEvent, useState } from 'react'
import { useTranslation } from 'react-i18next'
import useVersion from '../hooks/useVersion'
import * as i18n from '../i18n'
import platform from '../platform'
import iconPNG from '../static/icon.png'
import * as atoms from '../stores/atoms'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  const { t, i18n: _i18n } = useTranslation()
  const theme = useTheme()
  const [open, setOpen] = useAtom(atoms.openAboutDialogAtom)
  const language = useAtomValue(atoms.languageAtom)
  const versionHook = useVersion()
  // const [sponsorBanners, setSponsorBanners] = useState<SponsorAboutBanner[]>([])
  // useEffect(() => {
  //     if (open) {
  //         remote.listSponsorAboutBanner().then(setSponsorBanners)
  //         trackingEvent('about_window', { event_category: 'screen_view' })
  //     } else {
  //         setSponsorBanners([])
  //     }
  // }, [open])
  const handleClose = () => {
    setOpen(false)
  }

  const [wechatPopoverAnchorEl, setWechatPopoverAnchorEl] = useState<HTMLElement | null>(null)

  const handleWechatPopoverOpen = (event: MouseEvent<HTMLElement>) => {
    setWechatPopoverAnchorEl(event.currentTarget)
  }

  const handleWechatPopoverClose = () => {
    setWechatPopoverAnchorEl(null)
  }

  const wechatPopoverOpen = Boolean(wechatPopoverAnchorEl)

  return (
    <Page title="About Cortex">
      <div className="max-w-3xl mx-auto">
        <Box sx={{ textAlign: 'center', padding: '0 20px' }}>
          <img src={iconPNG} style={{ width: '100px', margin: 0, display: 'inline-block' }} />
          <h3 style={{ margin: '4px 0 5px 0' }}>
            Cortex
            {/\d/.test(versionHook.version) ? `(v${versionHook.version})` : ''}
          </h3>
          <p className="p-0 m-0">{t('about-slogan')}</p>
          <p className="p-0 m-0 opacity-60 text-xs">{t('about-introduction')}</p>
        </Box>
      </div>
    </Page>
  )
}

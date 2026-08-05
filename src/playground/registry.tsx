import { meta as radialFillButtonMeta } from "../components/buttons/radial-fill-button/meta";
import RadialFillButton from "../components/buttons/radial-fill-button/redail-fill-button"

import ConfirmDailog from '../components/modals/confirm-dialog/confirm-dialog'
import {meta as confirmDialogMeta} from "../components/modals/confirm-dialog/meta"

import ActionPopoverCard from '../components/cards/animated-card/action-popover-card/action-popover-card'
import { meta as actionPopoverCardMeta } from '../components/cards/animated-card/action-popover-card/meta'

import DashboardCard from '../components/cards/animated-card/dashboard-card/dashboard-card'
import { meta as dashboardCardMeta } from '../components/cards/animated-card/dashboard-card/meta'

import VoicePresenceCard from '../components/cards/animated-card/voice-presence-card/voice-presence-card'
import { meta as voicePresenceCardMeta } from '../components/cards/animated-card/voice-presence-card/meta'

import YoutubeHoverCard from '../components/cards/animated-card/youtube-hover-card/youtube-hover-card'
import { meta as youtubeHoverCardMeta } from '../components/cards/animated-card/youtube-hover-card/meta'

import RevailCard from '../components/cards/revail-card/revail-card'
import { meta as revailCardMeta } from '../components/cards/revail-card/meta'

import DetailGridCard from '../components/cards/static-card/detail-grid-card/detail-grid-card'
import { meta as detailGridCardMeta } from '../components/cards/static-card/detail-grid-card/meta'

import Glassy from '../components/experiments/Glassy'
import { meta as glassyMeta } from '../components/experiments/meta'
import BorderRadiBox from "../components/experiments/BorderRadiBox";

export const registry = [
  {
    id: "radial-fill-button",
    meta: radialFillButtonMeta,
    Component: RadialFillButton,
    bg: 'neutral-300'
  },
  {
    id: "confirm-dialog",
    meta: confirmDialogMeta,
    Component: ConfirmDailog,
    bg: 'neutral-800'
  },
  {
    id: "action-popover-card",
    meta: actionPopoverCardMeta,
    Component: ActionPopoverCard,
    bg: 'neutral-200'
  },
  {
    id: "dashboard-card",
    meta: dashboardCardMeta,
    Component: DashboardCard,
    bg: 'neutral-200'
  },
  {
    id: "voice-presence-card",
    meta: voicePresenceCardMeta,
    Component: VoicePresenceCard,
    bg: 'neutral-200'
  },
  {
    id: "youtube-hover-card",
    meta: youtubeHoverCardMeta,
    Component: YoutubeHoverCard,
    bg: 'neutral-900'
  },
  {
    id: "revail-card",
    meta: revailCardMeta,
    Component: RevailCard,
    bg: 'neutral-100'
  },
  {
    id: "detail-grid-card",
    meta: detailGridCardMeta,
    Component: DetailGridCard,
    bg: 'neutral-100'
  },
];

const createRequests = (base: String) => {
  const statusObject = {
    REQUEST: `${base}_REQUEST`,
    SUCCESS: `${base}_SUCCESS`,
    FAILED: `${base}_FAILED`,
  };
  return statusObject;
};

const ADD_MESSAGE = createRequests('ADD_MESSAGE');

const ADD_PINNED_MESSAGE = createRequests('ADD_PINNED_MESSAGE');

const CLEAR_MESSAGE_DATA = createRequests('CLEAR_MESSAGE_DATA');

const SET_PEER_STATE = 'SET_PEER_STATE';

const CLEAR_PEER_DATA = createRequests('CLEAR_PEER_DATA');

const SAVE_USER_DATA = createRequests('SAVE_USER_DATA');

const CLEAR_HMS_INSTANCE = 'CLEAR_HMS_INSTANCE';

const CHANGE_PIP_MODE_STATUS = 'CHANGE_PIP_MODE_STATUS';

const RESET_JOIN_CONFIG = 'RESET_JOIN_CONFIG';

const CHANGE_JOIN_AUDIO_MUTED = 'CHANGE_JOIN_AUDIO_MUTED';

const CHANGE_JOIN_VIDEO_MUTED = 'CHANGE_JOIN_VIDEO_MUTED';

const CHANGE_MIRROR_CAMERA = 'CHANGE_MIRROR_CAMERA';

const CHANGE_JOIN_SKIP_PREVIEW = 'CHANGE_JOIN_SKIP_PREVIEW';

const CHANGE_AUDIO_MIXER = 'CHANGE_AUDIO_MIXER';

const CHANGE_MUSIC_MODE = 'CHANGE_MUSIC_MODE';

const CHANGE_SHOW_STATS = 'CHANGE_SHOW_STATS'; // RTC Stats

const CHANGE_SHOW_HLS_STATS = 'CHANGE_SHOW_HLS_STATS'; // HLS Stats

const CHANGE_ENABLE_HLS_PLAYER_CONTROLS = 'CHANGE_ENABLE_HLS_PLAYER_CONTROLS'; // HLS Stats

const CHANGE_SHOW_CUSTOM_HLS_PLAYER_CONTROLS =
  'CHANGE_SHOW_CUSTOM_HLS_PLAYER_CONTROLS';

const CHANGE_SOFTWARE_DECODER = 'CHANGE_SOFTWARE_DECODER';

const CHANGE_AUTO_RESIZE = 'CHANGE_AUTO_RESIZE';

const CHANGE_AUTO_SIMULCAST = 'CHANGE_AUTO_SIMULCAST';

const SET_RTC_STATS = 'SET_RTC_STATS';

const CHANGE_HLS_ASPECT_RATIO = 'CHANGE_HLS_ASPECT_RATIO';

export default {
  ADD_PINNED_MESSAGE,
  ADD_MESSAGE,
  CLEAR_MESSAGE_DATA,
  CLEAR_PEER_DATA,
  SET_PEER_STATE,
  SAVE_USER_DATA,
  CLEAR_HMS_INSTANCE,
  CHANGE_PIP_MODE_STATUS,
  RESET_JOIN_CONFIG,
  CHANGE_JOIN_AUDIO_MUTED,
  CHANGE_JOIN_VIDEO_MUTED,
  CHANGE_MIRROR_CAMERA,
  CHANGE_JOIN_SKIP_PREVIEW,
  CHANGE_AUDIO_MIXER,
  CHANGE_MUSIC_MODE,
  CHANGE_SHOW_STATS,
  CHANGE_SHOW_HLS_STATS,
  CHANGE_ENABLE_HLS_PLAYER_CONTROLS,
  CHANGE_SHOW_CUSTOM_HLS_PLAYER_CONTROLS,
  CHANGE_SOFTWARE_DECODER,
  CHANGE_AUTO_RESIZE,
  CHANGE_AUTO_SIMULCAST,
  SET_RTC_STATS,
  CHANGE_HLS_ASPECT_RATIO,
};

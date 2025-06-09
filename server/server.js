const config = {
  rtmp: {
    host: '0.0.0.0',
    port: 1936,
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60,
  },
  http: {
    host: '0.0.0.0',
    port: 8080,
    allow_origin: '*',
  },
  trans: {
    ffmpeg: '/usr/bin/ffmpeg',
    tasks: [
      {
        app: 'live',
        hls: true,
        hlsFlags: '[hls_time=2:hls_list_size=6:hls_flags=delete_segments]',
        dash: false,
        mediaRoot: '/home/ubuntu/video-streaming/media',
      },
    ],
  },
};

const NodeMediaServer = require('node-media-server');

const config = {
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60,
  },
  http: {
    port: 8080,
    allow_origin: '*',
  },
  trans: {
    ffmpeg: '/usr/bin/ffmpeg',  // 容器裡安裝的 ffmpeg 路徑
    tasks: [
      {
        app: 'live',
        hls: true,
        hlsFlags: '[hls_time=2:hls_list_size=6:hls_flags=delete_segments]',
        dash: false,
      },
    ],
  },
  mediaRoot: '/home/ubuntu/video-streaming/media',
};

const nms = new NodeMediaServer(config);
nms.run();

console.log('Node Media Server is running...');

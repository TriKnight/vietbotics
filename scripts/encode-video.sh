#!/usr/bin/env bash
# Make web-ready renditions of one video for components/SmartVideo.
#
#   scripts/encode-video.sh <source video> <name> [poster time in seconds]
#
# Writes into public/videos/web:
#   <name>.webm / <name>.mp4                  960px wide, bitrate-capped (VP9 + H.264 for older Safari)
#   hd/<name>.webm / hd/<name>.mp4            1280px, for the large home page player on desktop + fast connections
#   preview/<name>.webm / preview/<name>.mp4  640px, first 12 s, for hover previews on the home page tiles
#   posters/<name>.webp                       still frame shown before the video plays
#
# Then reference it in data/applications.ts as `${VIDEO_DIR}/<name>` and `${VIDEO_DIR}/hd/<name>` (no extension).
# To replace an existing video, use a new <name> so browsers don't keep showing the cached one.
set -euo pipefail

SRC="$1"; NAME="$2"; AT="${3:-5}"
OUT="$(dirname "$0")/../public/videos/web"
mkdir -p "$OUT/hd" "$OUT/preview" "$OUT/posters"

VP9="-c:v libvpx-vp9 -g 60 -row-mt 1 -deadline good -cpu-used 2 -pix_fmt yuv420p -an"
X264="-c:v libx264 -preset slow -profile:v high -pix_fmt yuv420p -g 60 -movflags +faststart -an"

ffmpeg -v error -y -i "$SRC" -vf "scale='min(960,iw)':-2" $VP9 -crf 36 -b:v 400k "$OUT/$NAME.webm" &
ffmpeg -v error -y -i "$SRC" -vf "scale='min(960,iw)':-2" $X264 -crf 28 -maxrate 550k -bufsize 1100k "$OUT/$NAME.mp4" &
ffmpeg -v error -y -i "$SRC" -vf "scale='min(1280,iw)':-2" $VP9 -crf 33 -b:v 800k "$OUT/hd/$NAME.webm" &
ffmpeg -v error -y -i "$SRC" -vf "scale='min(1280,iw)':-2" $X264 -crf 25 -maxrate 1100k -bufsize 2200k "$OUT/hd/$NAME.mp4" &
ffmpeg -v error -y -t 12 -i "$SRC" -vf "scale='min(640,iw)':-2" $VP9 -crf 40 -b:v 180k "$OUT/preview/$NAME.webm" &
ffmpeg -v error -y -t 12 -i "$SRC" -vf "scale='min(640,iw)':-2" $X264 -crf 30 -maxrate 260k -bufsize 520k "$OUT/preview/$NAME.mp4" &
ffmpeg -v error -y -ss "$AT" -i "$SRC" -frames:v 1 -vf "scale='min(960,iw)':-2" -c:v libwebp -quality 72 "$OUT/posters/$NAME.webp" &
wait

ls -la "$OUT/$NAME".* "$OUT/hd/$NAME".* "$OUT/preview/$NAME".* "$OUT/posters/$NAME.webp"

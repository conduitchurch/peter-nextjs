#!/usr/bin/env bash

set -euo pipefail

SIZES=(400 800 1200 1600)

FILES=(
    "DSC_0719.jpg"
)

for file in *.jpg; do
    [[ -e "$file" ]] || continue

    if [[ "$file" == *tmp.jpg || "$file" == *-tmp-*.jpg ]]; then
        continue
    fi

    filename="${file%.jpg}"

    for size in "${SIZES[@]}"; do
        tmp="${filename}-${size}.tmp.jpg"

        magick "$file" -resize "${size}x>" "$tmp"

        [[ -e "$tmp" ]] || continue

        cwebp "$tmp" -q 80 -o "${filename}-${size}.webp"

        avifenc "$tmp" "${filename}-${size}.avif" -q 40 --ignore-icc

        rm "$tmp"
    done
done

echo "Done"
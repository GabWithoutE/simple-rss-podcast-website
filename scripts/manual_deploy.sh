#!/bin/sh

# Run from root directory of project
set -e

bucket_name="${1-$PODCAST_WEBSITE_BUCKET_NAME}"

if [[ -z "${bucket_name}" ]]; then
  echo "Usage: $0 <DEPLOYMENT BUCKET NAME>" >&2
  exit 1
fi

# build using .env.prod
# TODO: make build environment an option
npm run build:prod

# deploy using cache control headers as recommended by create-react-app
#	https://facebook.github.io/create-react-app/docs/production-build
# deploy static folder with cache-control max-age... (cache these files)
aws s3 sync ./build/static "s3://${bucket_name}/static" --cache-control max-age=3156000
# deploy other files with no caching
aws s3 sync ./build/ "s3://${bucket_name}" --exclude "static/*" --cache-control no-cache

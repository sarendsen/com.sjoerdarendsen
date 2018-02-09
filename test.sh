#!/usr/bin/env bash
myarray='["www.nl", "test.nl"]'
readarray -t DOMAINS_ARRAY < <(jq -r '.[]' <<<"$myarray")
echo "$DOMAINS_ARRAY"
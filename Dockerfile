FROM busybox
ADD ./nginx.conf.sigil /app/nginx.conf.sigil
CMD cat
FROM node:16.5.0-slim

SHELL ["/bin/bash", "-o", "pipefail", "-o", "errexit", "-u", "-c"]

# debian: packages
RUN apt-get -qq -y update >/dev/null; apt-get -qq -y install git less wget >/dev/null

ARG USER
ARG USER_ID=1000
ARG GROUP_ID=1000

# debian: userid match
RUN addgroup --gid "${GROUP_ID}" "${USER}" || true
RUN adduser --disabled-password --gid "${GROUP_ID}" --uid "${USER_ID}" --gecos "${USER}" "${USER}" || true

EXPOSE 9003
ENV PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin::/host/scripts-container:/host/bin:/host/node_modules/.bin:/host/local/bin RUST_BACKTRACE=1
WORKDIR /host
CMD ["bash"]

USER ${USER}

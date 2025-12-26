FROM ubuntu:22.04

# ===== 基础依赖 =====
RUN apt-get update && apt-get install -y \
    curl git wget unzip openssh-server ca-certificates \
    bash \
 && rm -rf /var/lib/apt/lists/*

# ===== nvm 相关环境变量（必须提前声明）=====
ENV NVM_DIR=/root/.nvm
ENV NODE_VERSION=22.11.0
ENV PNPM_VERSION=9.15.0

# ===== 安装 nvm =====
RUN curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# ===== 安装 Node.js 22 并设为默认 =====
RUN bash -c "\
  source $NVM_DIR/nvm.sh && \
  nvm install $NODE_VERSION && \
  nvm alias default $NODE_VERSION && \
  nvm use default \
"

# ===== 安装 pnpm 9（基于 corepack，推荐）=====
RUN bash -c "\
  source $NVM_DIR/nvm.sh && \
  corepack enable && \
  corepack prepare pnpm@$PNPM_VERSION --activate \
"

# ===== 让 nvm / node / pnpm 在所有 shell 生效 =====
RUN echo '\
export NVM_DIR="$HOME/.nvm"\n\
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"\n\
[ -s "$NVM_DIR/bash_completion" ] && . "$NVM_DIR/bash_completion"\n\
' >> /etc/profile

# ===== 安装 code-server =====
RUN curl -fsSL https://code-server.dev/install.sh | sh \
  && code-server --install-extension cnbcool.cnb-welcome \
  && code-server --install-extension dbaeumer.vscode-eslint \
  && code-server --install-extension redhat.vscode-yaml \
  && echo done

# ===== 验证（构建时就能发现问题）=====
RUN bash -lc "node -v && pnpm -v"

ENV LANG C.UTF-8
ENV LANGUAGE C.UTF-8

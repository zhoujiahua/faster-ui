#!/bin/bash

# 版本号
# shellcheck disable=SC2034
nss_version="FTDI-V1.0.0"

# 获取提交人信息
commit_author=$(git config user.name)
commit_email=$(git config user.email)

# 拉取更新以及添加文件到缓存
git pull && git add .

# 获取当前日期和时间
current_date_time=$(date +"%Y-%m-%d %H:%M:%S")

# 获取文件变化
file_changes=$(git diff --name-status HEAD)

# 获取当前分支名称
current_branch=$(git rev-parse --abbrev-ref HEAD)

# 获取最近一次提交的 commit ID
latest_commit=$(git rev-parse --short HEAD)

# 生成日志前缀，包括版本号、日期时间、分支名称、最近一次提交的 commit ID、提交人信息和系统信息
log_prefix="${current_date_time} | ${current_branch} | ${latest_commit} | ${commit_author} | ${commit_email}"

# 添加提交日志，包括日志前缀和文件变化
git commit -m "${nss_version} | ${log_prefix} | File:${file_changes}"

# 推送到远程仓库
git push -u origin "${current_branch}"

# 打上新的标签
git tag "${nss_version}"

# 推送新标签到远程仓库
git push --tags

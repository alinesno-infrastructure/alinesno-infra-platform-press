#!/bin/bash

files=(
"01_概述_仪盘表.md",
"02_功能列表_应用管理.md",
"03_功能列表_黑白名单.md",
"04_功能列表_OTLP配置.md",
"05_功能列表_请求日志.md",
"06_功能列表_自定义.md",
"07_功能列表_认证配置.md",
)

for file in "${files[@]}"
do
    echo "#${file%.*}" > "$file"
done

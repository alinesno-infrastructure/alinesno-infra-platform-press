#!/bin/bash

files=(
"01_概述_仪盘表.md",
"02_功能列表_服务管理.md",
"03_功能列表_负载管理.md",
"04_功能列表_客户端管理.md",
"05_功能列表_IP黑名单.md",
"06_功能列表_接口统计.md",
"07_功能列表_接口监控.md",
)

for file in "${files[@]}"
do
    echo "#${file%.*}" > "$file"
done

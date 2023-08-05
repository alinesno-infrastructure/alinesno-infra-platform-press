#!/bin/bash

files=(
"01_概述_仪盘表.md",
"02_功能列表_应用管理.md",
"03_功能列表_ID生成策略.md",
"04_功能列表_分发管理.md",
"05_功能列表_冲突检测.md",
"06_功能列表_ID回收.md",
"07_功能列表_请求记录.md",
)

for file in "${files[@]}"
do
    echo "#${file%.*}" > "$file"
done

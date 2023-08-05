#!/bin/bash

files=(
"01_概述_仪盘表.md",
"02_应用管理.md",
"03_请求记录.md",
"04_模型管理.md",
)

for file in "${files[@]}"
do
    echo "#${file%.*}" > "$file"
done

#!/bin/bash

files=(
"01_概述_仪盘表.md",
"02_项目管理_创建和管理项目.md",
"03_Prompt管理_管理Prompt.md",
"04_专家管理.md",
"05_数据管理_数据接口.md",
"06_数据管理_数据预处理.md",
"07_数据管理_模型管理.md",
"08_配置管理_系统配置.md",
)

for file in "${files[@]}"
do
    echo "#${file%.*}" > "$file"
done
